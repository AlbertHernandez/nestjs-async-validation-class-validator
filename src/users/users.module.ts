import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { IsUserIdValidConstraint } from './validations/is-user-id-valid.constraint';

@Module({
  controllers: [UsersController],
  providers: [UsersService, IsUserIdValidConstraint],
})
export class UsersModule {}
