import { Injectable, HttpException, HttpStatus, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwt: JwtService,
  ) {}

  async register(user: RegisterDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    const userEntity : User = this.userRepository.create({
      email: user.email,
      password: user.password,
      username: user.username,
    })
    return await this.userRepository.save(userEntity);
  }
 
  async login(username: string, password: string) {
    const user = await this.userRepository.findOne({
      username,
    });
      
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const { password, ...result } = user;
        
        const payload = { username: user.username, sub: user.id };

        return {
          access_token: this.jwt.sign(payload),
        };
      }
      throw new UnauthorizedException("Password or username invalid");
    }
    throw new UnauthorizedException('Password or username invalid');
  }
}

