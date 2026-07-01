import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { Dashboard } from './entities/dashboard.entity';
import { DashboardWidget } from './entities/dashboard-widget.entity';
import {
  CreateDashboardDto,
  CreateWidgetDto,
  UpdateWidgetPositionDto,
} from './dto/create-dashboard.dto';

@Injectable()
export class DashboardsService extends CrudService<Dashboard> {
  constructor(
    @InjectRepository(Dashboard)
    private readonly dashboardRepository: Repository<Dashboard>,
    @InjectRepository(DashboardWidget)
    private readonly widgetRepository: Repository<DashboardWidget>,
  ) {
    super(dashboardRepository);
  }

  async createDashboard(dto: CreateDashboardDto): Promise<Dashboard> {
    const dashboard = this.dashboardRepository.create(
      dto as unknown as Partial<Dashboard>,
    );
    if (dto.isDefault) {
      await this.dashboardRepository.update(
        { isDefault: true },
        { isDefault: false },
      );
    }
    return this.dashboardRepository.save(dashboard);
  }

  async setDefault(id: string): Promise<Dashboard> {
    await this.dashboardRepository.update(
      { isDefault: true },
      { isDefault: false },
    );
    const dashboard = await this.findOne(id);
    dashboard.isDefault = true;
    return this.dashboardRepository.save(dashboard);
  }

  async getDefault(): Promise<Dashboard | null> {
    return this.dashboardRepository.findOne({
      where: { isDefault: true, isActive: true },
      relations: { widgets: true },
    });
  }

  async addWidget(
    dashboardId: string,
    dto: CreateWidgetDto,
  ): Promise<DashboardWidget> {
    await this.findOne(dashboardId);
    return this.widgetRepository.save(
      this.widgetRepository.create({
        ...dto,
        dashboardId,
      } as unknown as Partial<DashboardWidget>),
    );
  }

  async updateWidgetPosition(
    id: string,
    dto: UpdateWidgetPositionDto,
  ): Promise<DashboardWidget> {
    await this.widgetRepository.findOneOrFail({ where: { id } });
    await this.widgetRepository.update(id, {
      position: dto.position,
    });
    return this.widgetRepository.findOneOrFail({ where: { id } });
  }

  async removeWidget(id: string): Promise<void> {
    const result = await this.widgetRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Widget not found');
  }

  async getWidgets(dashboardId: string): Promise<DashboardWidget[]> {
    return this.widgetRepository.find({
      where: { dashboardId },
      order: { createdAt: 'ASC' },
    });
  }

  async getDashboardWithWidgets(id: string): Promise<Dashboard> {
    return this.dashboardRepository.findOneOrFail({
      where: { id },
      relations: { widgets: true },
    });
  }
}
