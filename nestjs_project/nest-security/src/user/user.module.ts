
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { LocalStrategy } from 'src/auth/local.strategy';


@Module({
  imports: [],
  controllers: [],
  providers: [UserService, LocalStrategy],
  exports: [UserService]
})
export class UserModule {}
