import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDto, RegisterDto, LoginResponseDto } from './dto/login.dto';
import { User, UserRole } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(dto: LoginDto): Promise<LoginResponseDto> {
    const user = await this.usersService.findByUsername(dto.username);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    return this.generateTokens(user);
  }

  async register(dto: RegisterDto): Promise<LoginResponseDto> {
    const existing = await this.usersService.findByUsername(dto.username);
    if (existing) throw new ConflictException('Username already exists');

    const existingEmail = await this.usersService.findByEmail(dto.email);
    if (existingEmail) throw new ConflictException('Email already exists');

    const hashedPassword = await bcrypt.hash(dto.password, 12);
    const created = await this.usersService.createUser({
      ...dto,
      password: hashedPassword,
    });

    return this.generateTokens(created);
  }

  private generateTokens(user: User): LoginResponseDto {
    const payload = {
      sub: user.id,
      username: user.username,
      roles: user.roles || [UserRole.USER],
    };

    return {
      accessToken: this.jwtService.sign(payload),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: this.config.get<string>('jwt.refreshExpiresIn') || '30d',
      } as any),
      expiresIn: 604800,
    };
  }

  async getProfile(userId: string) {
    const user = await this.usersService.findOne(userId);
    return user;
  }
}
