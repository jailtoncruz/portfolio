import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from '../../common/decorators/public';
import { AuthenticationService } from './authentication.service';
import { SignInDTO } from './interfaces/signin-dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDTO) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
