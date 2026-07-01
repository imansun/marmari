import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FleetController } from './fleet.controller';
import { FleetService } from './fleet.service';
import { Vehicle } from './entities/vehicle.entity';
import { FuelLog } from './entities/fuel-log.entity';
import { MaintenanceLog } from './entities/maintenance-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, FuelLog, MaintenanceLog])],
  controllers: [FleetController],
  providers: [FleetService],
  exports: [FleetService],
})
export class FleetModule {}
