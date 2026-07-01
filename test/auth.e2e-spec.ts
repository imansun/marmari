import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Auth (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /api/v1/auth/register', () => {
    const newUser = {
      username: 'e2etest',
      email: 'e2e@test.com',
      password: 'Test1234!',
    };

    it('should register a new user', () => {
      return request(app.getHttpServer())
        .post('/api/v1/auth/register')
        .send(newUser)
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('accessToken');
          expect(res.body.user).toHaveProperty('username', 'e2etest');
        });
    });

    it('should reject duplicate username', () => {
      return request(app.getHttpServer())
        .post('/api/v1/auth/register')
        .send(newUser)
        .expect(409);
    });

    it('should reject invalid input', () => {
      return request(app.getHttpServer())
        .post('/api/v1/auth/register')
        .send({})
        .expect(400);
    });
  });

  describe('POST /api/v1/auth/login', () => {
    it('should login with valid credentials', () => {
      return request(app.getHttpServer())
        .post('/api/v1/auth/login')
        .send({ username: 'admin', password: 'admin123' })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('accessToken');
        });
    });

    it('should reject invalid password', () => {
      return request(app.getHttpServer())
        .post('/api/v1/auth/login')
        .send({ username: 'admin', password: 'wrong' })
        .expect(401);
    });
  });

  describe('GET /api/v1/auth/profile', () => {
    it('should return profile with valid token', async () => {
      const loginRes = await request(app.getHttpServer())
        .post('/api/v1/auth/login')
        .send({ username: 'admin', password: 'admin123' });
      const token = loginRes.body.accessToken;

      return request(app.getHttpServer())
        .get('/api/v1/auth/profile')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('username', 'admin');
        });
    });

    it('should reject requests without token', () => {
      return request(app.getHttpServer())
        .get('/api/v1/auth/profile')
        .expect(401);
    });
  });
});
