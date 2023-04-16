import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUserIdValidConstraint } from './is-user-id-valid.constraint';

export function IsUserIdValid(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsUserIdValidConstraint,
    });
  };
}
