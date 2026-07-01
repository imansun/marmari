import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkcentersController } from './workcenters.controller';
import { WorkcentersService } from './workcenters.service';
import { WorkCenter } from './entities/work-center.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkCenter])],
  controllers: [WorkcentersController],
  providers: [WorkcentersService],
  exports: [WorkcentersService],
})
export class WorkcentersModule {}
