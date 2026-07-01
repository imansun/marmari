import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { Vehicle, VehicleStatus } from './entities/vehicle.entity';
import { FuelLog } from './entities/fuel-log.entity';
import { MaintenanceLog } from './entities/maintenance-log.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { CreateFuelLogDto } from './dto/create-fuel-log.dto';
import { CreateMaintenanceLogDto } from './dto/create-maintenance-log.dto';
import { UpdateVehicleStatusDto } from './dto/update-vehicle-status.dto';

@Injectable()
export class FleetService extends CrudService<Vehicle> {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
    @InjectRepository(FuelLog)
    private readonly fuelRepository: Repository<FuelLog>,
    @InjectRepository(MaintenanceLog)
    private readonly maintenanceRepository: Repository<MaintenanceLog>,
  ) {
    super(vehicleRepository);
  }

  async createVehicle(dto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleRepository.save(
      this.vehicleRepository.create(dto as unknown as Partial<Vehicle>),
    );
  }

  async updateStatus(
    id: string,
    dto: UpdateVehicleStatusDto,
  ): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findOneOrFail({
      where: { id },
    });
    vehicle.status = dto.status;
    return this.vehicleRepository.save(vehicle);
  }

  async getActiveVehicles(): Promise<Vehicle[]> {
    return this.vehicleRepository.find({
      where: { status: VehicleStatus.ACTIVE },
    });
  }

  async getExpiringInsurance(beforeDays: number = 30): Promise<Vehicle[]> {
    const threshold = new Date();
    threshold.setDate(threshold.getDate() + beforeDays);
    return this.vehicleRepository
      .createQueryBuilder('v')
      .where('v.insuranceExpiry <= :threshold', { threshold })
      .andWhere("v.status != 'retired'")
      .getMany();
  }

  async addFuelLog(dto: CreateFuelLogDto): Promise<FuelLog> {
    await this.vehicleRepository.findOneOrFail({
      where: { id: dto.vehicleId },
    });
    return this.fuelRepository.save(
      this.fuelRepository.create(dto as unknown as Partial<FuelLog>),
    );
  }

  async getFuelLogs(vehicleId: string): Promise<FuelLog[]> {
    return this.fuelRepository.find({
      where: { vehicleId },
      order: { date: 'DESC' },
    });
  }

  async addMaintenanceLog(
    dto: CreateMaintenanceLogDto,
  ): Promise<MaintenanceLog> {
    const vehicle = await this.vehicleRepository.findOneOrFail({
      where: { id: dto.vehicleId },
    });
    vehicle.lastMaintenanceDate = new Date(dto.date);
    await this.vehicleRepository.save(vehicle);
    const log = this.maintenanceRepository.create(
      dto as unknown as Partial<MaintenanceLog>,
    );
    return this.maintenanceRepository.save(log);
  }

  async getMaintenanceLogs(vehicleId: string): Promise<MaintenanceLog[]> {
    return this.maintenanceRepository.find({
      where: { vehicleId },
      order: { date: 'DESC' },
    });
  }
}
