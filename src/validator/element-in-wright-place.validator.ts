import { Validator } from './validator';
import { Validation } from '../../dist/model/validation.model';
import { elementNotInWrightPlace, elementsNotInWrightPlace } from '../template/element-not-in-wright-place.template';
import { RuleEnum } from '../model/rule.enum';

/**
 * a validator that checks if you've not thing like :
 * providers: [FooComponent, BarDirective, OtherPipe],
 * exports: [WrongProvider]
 */
export class ElementInWrightPlaceValidator implements Validator {
  validate(module, ast?: any): Validation {
    const listOfViolations = [];
    for (const provider of module.providers) {
      if (provider.match(/.+(Component|Pipe|Directive|Module)$/)) {
        listOfViolations.push(elementNotInWrightPlace(provider, 'providers'));
      }
    }
    for (const anExport of module.exports) {
      if (!anExport.match(/.+(Component|Pipe|Directive|Module)$/)) {
        listOfViolations.push(elementNotInWrightPlace(anExport, 'exports'));
      }
    }
    if (listOfViolations.length > 0) {
      return new Validation({
        rule: RuleEnum.ELEMENT_CAN_NOT_BE_PROVIDED.toString(), //todo: fix me
        className: module.name,
        error: elementsNotInWrightPlace(listOfViolations)
      });
    }
    return null;
  }
}