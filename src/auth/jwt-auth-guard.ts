import { UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Strategy } from 'passport-jwt';

export class JwtAuthGuard extends AuthGuard('jwt') {
}
