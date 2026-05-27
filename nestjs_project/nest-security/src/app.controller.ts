import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';


// issue the id card jwt token.
@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}


  @Post('/login')
  // import the guard using passport
  @UseGuards(AuthGuard("local"))
  // authentication
  // nest step authorize
  // id card jwt token
  login(@Request()req): string{
    const token = this.authService.generateToken(req.user);
    return token;
  }
}
