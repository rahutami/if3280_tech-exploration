import { Body, ClassSerializerInterceptor, Controller, NotFoundException, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { User } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @Post('/register')
  @UseInterceptors(ClassSerializerInterceptor)
  async register(@Body() user: RegisterDto){
    return await this.authService.register(user);
  }

  @Post('/login')
  async login(@Body() user: LoginDto){
    return this.authService.login(user.username, user.password)
  }
}
