import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }


  // testing the auth guard

  // request will only go thorugh
  // if header contains valid JWT
  // JWT currently set to expire after 60 seconds
  //  from generating in log in

  // todo: figure out authentication global
  // or use guard on each route
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}