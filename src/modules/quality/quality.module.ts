import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualityController } from './quality.controller';
import { QualityService } from './quality.service';
import { QualityCheck } from './entities/quality-check.entity';
import { QualityCheckItem } from './entities/quality-check-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QualityCheck, QualityCheckItem])],
  controllers: [QualityController],
  providers: [QualityService],
  exports: [QualityService],
})
export class QualityModule {}
