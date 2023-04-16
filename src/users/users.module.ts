import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserExistsRule } from './validations/user-exists-rule';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserExistsRule],
})
export class UsersModule {}
