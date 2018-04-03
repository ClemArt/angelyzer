import { AngularModule } from './model/angular-module.model';
import { GraphExtractorService } from './extractor/graph-extractor.service';
import { ASTModuleExtractorService } from './extractor/ast-module-extractor.service';
import { CoreModuleValidator } from './validator/core-module.validator';
import { graphJSTemplate } from './template/code.js.template';
import { validationTemplate } from './template/validations.html.template';
import { Validation } from './model/validation.model';
import { ProvidersValidator } from './validator/providers.validator';
import { ImportsValidator } from './validator/imports.validator';
import { ExportsValidator } from './validator/exports.validator';
import { DeclarationsValidator } from './validator/declarations.validator';
import { ImportRefactorValidator } from './validator/import-refactor.validator';
import { refactorTemplate } from './template/refactor.html.template';
import { DeclarationRefactorValidator } from './validator/declaration-refactor.validator';
const fs = require('fs');

export class Scanner {

  private graphService: GraphExtractorService;
  private astModuleExtractorService: ASTModuleExtractorService;
  private coreModuleValidation: CoreModuleValidator;
  private providersValidator: ProvidersValidator;
  private importsValidator: ImportsValidator;
  private exportsValidator: ExportsValidator;
  private importRefactorValidator: ImportRefactorValidator;
  private declarationRefactorValidator: DeclarationRefactorValidator;

  private modules: AngularModule[] = [];
  private fileCount: number = 0;
  private validations: Validation[] = [];
  private declarationsValidator: DeclarationsValidator;


  constructor() {
    this.astModuleExtractorService = new ASTModuleExtractorService();
    this.graphService = new GraphExtractorService();
    this.coreModuleValidation = new CoreModuleValidator();
    this.providersValidator = new ProvidersValidator();
    this.importsValidator = new ImportsValidator();
    this.exportsValidator = new ExportsValidator();
    this.declarationsValidator = new DeclarationsValidator();
    this.importRefactorValidator = new ImportRefactorValidator();
    this.declarationRefactorValidator = new DeclarationRefactorValidator();
  }

  public scanPath(files: string[], modulePath: string): void {
    if (files) {
      files.forEach(file => {
        const fullQualifierPath = modulePath + '/' + file;
        if (fs.lstatSync(fullQualifierPath).isFile()) {
          // scan uniquement de modules
          if (fullQualifierPath.indexOf('module.ts') !== -1) this.processFile(fullQualifierPath);
        } else if (fs.lstatSync(fullQualifierPath).isDirectory()) {
          fs.readdir(fullQualifierPath, (err, files) => this.scanPath(files, fullQualifierPath));
        }
      });

      const graph = this.graphService.computeGraph(this.modules);

      const importRefactorValidations = this.importRefactorValidator.validate(this.modules);
      const declarationRefactorValidations = this.declarationRefactorValidator.validate(this.modules);
      fs.writeFileSync('./report/report.json', JSON.stringify(this.modules, null, 2));
      fs.writeFileSync('./report/nodes.json', JSON.stringify(graph, null, 2));
      fs.writeFileSync('./report/validations.html', validationTemplate(this.validations));
      fs.writeFileSync('./report/refactor.html', refactorTemplate(importRefactorValidations));
      fs.writeFileSync('./report/declarations.html', refactorTemplate(declarationRefactorValidations));
      fs.writeFileSync('./report/code.js', graphJSTemplate(graph));
    } else {
      console.log('No files found');
    }
  }

  private processFile(inputFile: string) {
    this.fileCount++;
    const fileContent = fs.readFileSync(inputFile, 'utf-8');
    console.log(this.fileCount, ' scanning file :', inputFile);
    // read module
    const angularModule = <AngularModule> this.astModuleExtractorService.extractModule(fileContent);
    this.modules.push(angularModule);
    //
    const coreSharedModulePatternValidation = this.coreModuleValidation.validate(angularModule, this.astModuleExtractorService.getAST(fileContent));
    const providersValidation = this.providersValidator.validate(angularModule);
    const exportsValidation = this.exportsValidator.validate(angularModule);
    const importsValidation = this.importsValidator.validate(angularModule);
    const declarationsValidation = this.declarationsValidator.validate(angularModule);

    if (coreSharedModulePatternValidation) this.validations.push(coreSharedModulePatternValidation);
    if (providersValidation) this.validations.push(providersValidation);
    if (exportsValidation) this.validations.push(exportsValidation);
    if (importsValidation) this.validations.push(importsValidation);
    if (declarationsValidation) this.validations.push(declarationsValidation);
  }
}