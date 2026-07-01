import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { FleetService } from './fleet.service';
import { Vehicle } from './entities/vehicle.entity';
import { FuelLog } from './entities/fuel-log.entity';
import { MaintenanceLog } from './entities/maintenance-log.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { CreateFuelLogDto } from './dto/create-fuel-log.dto';
import { CreateMaintenanceLogDto } from './dto/create-maintenance-log.dto';
import { UpdateVehicleStatusDto } from './dto/update-vehicle-status.dto';
import { Roles } from '../../common';

@ApiTags('Fleet')
@ApiBearerAuth()
@Controller('fleet')
export class FleetController {
  constructor(private readonly fleetService: FleetService) {}

  @Post('vehicles')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Create vehicle' })
  createVehicle(@Body() dto: CreateVehicleDto): Promise<Vehicle> {
    return this.fleetService.createVehicle(dto);
  }

  @Get('vehicles')
  @ApiOperation({ summary: 'List all vehicles' })
  findAllVehicles(): Promise<Vehicle[]> {
    return this.fleetService.findAll();
  }

  @Get('vehicles/active')
  @ApiOperation({ summary: 'Get active vehicles' })
  getActiveVehicles(): Promise<Vehicle[]> {
    return this.fleetService.getActiveVehicles();
  }

  @Get('vehicles/expiring-insurance')
  @ApiOperation({ summary: 'Get vehicles with expiring insurance' })
  @ApiQuery({ name: 'beforeDays', required: false, type: Number })
  getExpiringInsurance(
    @Query('beforeDays') beforeDays?: number,
  ): Promise<Vehicle[]> {
    return this.fleetService.getExpiringInsurance(beforeDays);
  }

  @Get('vehicles/:id')
  @ApiOperation({ summary: 'Get vehicle by id' })
  findOneVehicle(@Param('id') id: string): Promise<Vehicle> {
    return this.fleetService.findOne(id);
  }

  @Patch('vehicles/:id/status')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Update vehicle status' })
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateVehicleStatusDto,
  ): Promise<Vehicle> {
    return this.fleetService.updateStatus(id, dto);
  }

  @Post('fuel-logs')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Add fuel log' })
  addFuelLog(@Body() dto: CreateFuelLogDto): Promise<FuelLog> {
    return this.fleetService.addFuelLog(dto);
  }

  @Get('fuel-logs/:vehicleId')
  @ApiOperation({ summary: 'Get fuel logs for vehicle' })
  getFuelLogs(@Param('vehicleId') vehicleId: string): Promise<FuelLog[]> {
    return this.fleetService.getFuelLogs(vehicleId);
  }

  @Post('maintenance-logs')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Add maintenance log' })
  addMaintenanceLog(
    @Body() dto: CreateMaintenanceLogDto,
  ): Promise<MaintenanceLog> {
    return this.fleetService.addMaintenanceLog(dto);
  }

  @Get('maintenance-logs/:vehicleId')
  @ApiOperation({ summary: 'Get maintenance logs for vehicle' })
  getMaintenanceLogs(
    @Param('vehicleId') vehicleId: string,
  ): Promise<MaintenanceLog[]> {
    return this.fleetService.getMaintenanceLogs(vehicleId);
  }
}
