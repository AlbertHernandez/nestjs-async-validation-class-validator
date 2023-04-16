import { IsNumberString, Validate } from 'class-validator';
import { UserExistsRule } from '../validations/user-exists-rule';

export class UpdateUserParamsDto {
  @IsNumberString()
  @Validate(UserExistsRule)
  id: number;
}
