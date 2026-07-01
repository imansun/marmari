import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceController } from './maintenance.controller';
import { MaintenanceService } from './maintenance.service';
import { MaintenanceSchedule } from './entities/maintenance-schedule.entity';
import { MaintenanceTask } from './entities/maintenance-task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MaintenanceSchedule, MaintenanceTask])],
  controllers: [MaintenanceController],
  providers: [MaintenanceService],
  exports: [MaintenanceService],
})
export class MaintenanceModule {}
