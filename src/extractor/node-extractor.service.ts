import {Node} from '../model/node.model';
import {AngularModule} from '../model/angular-module.model';

export class NodeExtractorService {
    public importsToNodes(module: AngularModule): Node[] {
        if (module.imports) {
            return module.imports.map(anImport => (new Node({
                data: {
                    id: anImport,
                    name: anImport,
                    faveColor: '#F5A45D',
                    faveShape: 'rectangle'
                }
            })));
        }
        return [];
    }

    public exportsToNodes(module: AngularModule): Node[] {
        if (module.exports) {
            return module.exports.map(anExport => {
                    if (anExport.indexOf('Module') !== -1) {
                        return new Node({
                            data: {
                                id: anExport,
                                name: anExport,
                                faveColor: '#F5A45D',
                                faveShape: 'rectangle'
                            }
                        });
                    }
                    return new Node({
                        data: {
                            id: anExport,
                            name: anExport,
                            faveColor: '#0df500',
                            faveShape: 'rectangle'
                        }
                    });
                }
            );
        }
        return [];
    }

    public moduleToNode(module: AngularModule): Node {
        const node = new Node({data: {id: module.name, name: module.name, faveColor: '#F5A45D', faveShape: 'rectangle'}});
        return node;
    }

    public bootstrapToNodes(module: AngularModule): Node[] {
        if (module.bootstrap) {
            return module.bootstrap.map(bootstrap => (new Node({
                data: {id: bootstrap, name: bootstrap, faveColor: '#00006F', faveShape: 'triangle'}
            })));
        }
        return [];
    }

    public declarationsToNodes(module: AngularModule): Node[] {
        if (module.declarations) {
            return module.declarations.map(declaration => (new Node({
                data: {id: declaration, name: declaration, parent: module.name}
            })));
        }
        return [];
    }

    public providersToNodes(module: AngularModule): Node[] {
        if (module.providers) {
            return module.providers.map(provider => (new Node({
                data: {id: provider, name: provider, parent: module.name}
            })));
        }
        return [];
    }

    public extractModule(module: AngularModule): Node[] {
      let moduleNode = new Node({data: {id: module.name, name: module.name}});
      let declarations = this.declarationsToNodes(module);
      let providers = this.providersToNodes(module);
      return [moduleNode, ...declarations, ...providers];
    }
}