import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt');

describe('AuthService', () => {
  let service: AuthService;
  let usersService: jest.Mocked<UsersService>;
  let jwtService: jest.Mocked<JwtService>;

  beforeEach(async () => {
    const mockUsersService = {
      findByUsername: jest.fn(),
      findByEmail: jest.fn(),
      createUser: jest.fn(),
      findOne: jest.fn(),
    };
    const mockJwtService = {
      sign: jest.fn(),
    };
    const mockConfigService = {
      get: jest.fn().mockReturnValue('30d'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get(UsersService);
    jwtService = module.get(JwtService);
  });

  describe('register', () => {
    it('should create a new user and return token', async () => {
      usersService.findByUsername.mockResolvedValue(null);
      usersService.findByEmail.mockResolvedValue(null);
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashed');
      usersService.createUser.mockResolvedValue({
        id: '1',
        username: 'test',
        email: 'test@test.com',
        roles: ['user'],
      } as any);
      jwtService.sign.mockReturnValue('token');

      const result = await service.register({
        username: 'test',
        password: 'pass123',
        email: 'test@test.com',
      });
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
    });

    it('should throw if username exists', async () => {
      usersService.findByUsername.mockResolvedValue({ id: '1' } as any);
      await expect(
        service.register({
          username: 'test',
          password: 'pass123',
          email: 'test@test.com',
        }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('login', () => {
    it('should return token for valid credentials', async () => {
      usersService.findByUsername.mockResolvedValue({
        id: '1',
        username: 'test',
        password: 'hashed',
        roles: ['user'],
        isActive: true,
      } as any);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      jwtService.sign.mockReturnValue('token');

      const result = await service.login({
        username: 'test',
        password: 'pass123',
      });
      expect(result).toHaveProperty('accessToken');
    });

    it('should throw for invalid password', async () => {
      usersService.findByUsername.mockResolvedValue({
        id: '1',
        username: 'test',
        password: 'hashed',
        roles: ['user'],
        isActive: true,
      } as any);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);
      await expect(
        service.login({ username: 'test', password: 'wrong' }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
