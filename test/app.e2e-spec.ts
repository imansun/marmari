import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('App (e2e)', () => {
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

  describe('GET /api', () => {
    it('should return health status', () => {
      return request(app.getHttpServer())
        .get('/api')
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe('ok');
          expect(res.body.name).toBe('Marmari API');
          expect(res.body).toHaveProperty('timestamp');
        });
    });
  });

  describe('GET /api/docs', () => {
    it('should return Swagger UI', () => {
      return request(app.getHttpServer()).get('/api/docs').expect(302);
    });
  });
});
