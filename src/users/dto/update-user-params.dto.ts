import { IsNumberString } from 'class-validator';
import { IsUserIdValid } from '../validations/is-user-id-valid';

export class UpdateUserParamsDto {
  @IsNumberString()
  @IsUserIdValid()
  id: string;
}
