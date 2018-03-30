/**
 * Defines a set of rules for Angelyzer
 */
export enum RuleEnum {
  CORE_MODULE_SHARED_MODULE_PATTERN = <any> 'Core module vs SharedModule pattern',
  IMPORT_NON_MODULE = <any> 'Element imported is an Angular Module',
  ELEMENT_CAN_NOT_BE_PROVIDED = <any> 'Element (Component, Module, Directive, Pipe) has nothing to do in providers',
  PROVIDE_SERVICE_IN_SINGLE_MODULE = <any> 'A service must appear in providers of only one module',
  COMPONENT_DIRECTIVE_PIPE_IN_SINGLE_MODULE = <any> 'A component, directive, pipe must appear in declarations of only one module',
  MODULE_MULTIPLE_IMPORT_REFACTOR = <any> 'A module imported, many times, goes in a SharedModule',
}