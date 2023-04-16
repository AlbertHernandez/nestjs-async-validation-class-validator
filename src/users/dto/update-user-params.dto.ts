import { IsNumberString } from 'class-validator';

export class UpdateUserParamsDto {
  @IsNumberString()
  id: number;
}
