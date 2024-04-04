import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)



  @Post('register')
  async signUp(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    try {
      if (!username || !email || !password) {
        throw new UnauthorizedException("Invalid Input");
      }

      const user = await this.authService.signUp(username, email, password);
      return user;
    } 
    catch (error) {
      throw new UnauthorizedException("Invalid Input");
    }

  }



  @Post('login')
  signIn(
    @Body() username: string,
    @Body() password: string,
  ) {
    return this.authService.signIn(username, password);
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