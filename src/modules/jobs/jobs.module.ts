import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { JobsProcessor } from './jobs.processor';

@Module({
  imports: [
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        redis: {
          host: config.get<string>('redis.host', 'localhost'),
          port: config.get<number>('redis.port', 6379),
          password: config.get<string>('redis.password') || undefined,
          db: config.get<number>('redis.db', 0),
        },
      }),
    }),
    BullModule.registerQueue({ name: 'default' }),
  ],
  controllers: [JobsController],
  providers: [JobsService, JobsProcessor],
  exports: [JobsService],
})
export class JobsModule {}
