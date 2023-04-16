import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from '../users.service';

@ValidatorConstraint({ name: 'UserExists', async: true })
@Injectable()
export class UserExistsRule implements ValidatorConstraintInterface {
  constructor(private usersService: UsersService) {}

  async validate(value: string) {
    const user = await this.usersService.findOne(+value);
    return Boolean(user);
  }

  defaultMessage(args: ValidationArguments) {
    return `User doesn't exist`;
  }
}
