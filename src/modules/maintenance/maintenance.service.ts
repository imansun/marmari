import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import {
  MaintenanceSchedule,
  MaintenanceStatus,
  MaintenanceType,
  MaintenancePriority,
} from './entities/maintenance-schedule.entity';
import {
  MaintenanceTask,
  TaskStatus,
} from './entities/maintenance-task.entity';

@Injectable()
export class MaintenanceService extends CrudService<MaintenanceSchedule> {
  constructor(
    @InjectRepository(MaintenanceSchedule)
    repository: Repository<MaintenanceSchedule>,
    @InjectRepository(MaintenanceTask)
    private readonly taskRepository: Repository<MaintenanceTask>,
  ) {
    super(repository);
  }

  async createSchedule(dto: {
    code: string;
    title: string;
    maintenanceType: string;
    workCenterId?: string;
    productId?: string;
    priority?: string;
    scheduledDate: string;
    description?: string;
    cost?: number;
    tasks: Array<{
      description: string;
      assignedToId?: string;
      estimatedHours?: number;
    }>;
  }): Promise<MaintenanceSchedule> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Schedule code already exists');

    const tasks = dto.tasks.map((t) =>
      this.taskRepository.create({
        description: t.description,
        assignedToId: t.assignedToId,
        status: TaskStatus.PENDING,
        estimatedHours: t.estimatedHours ?? 0,
      }),
    );

    const schedule = this.repository.create({
      code: dto.code,
      title: dto.title,
      maintenanceType: dto.maintenanceType as MaintenanceType,
      workCenterId: dto.workCenterId,
      productId: dto.productId,
      priority:
        (dto.priority as MaintenancePriority) ?? MaintenancePriority.MEDIUM,
      status: MaintenanceStatus.PLANNED,
      scheduledDate: new Date(dto.scheduledDate),
      description: dto.description,
      cost: dto.cost ?? 0,
      tasks,
    });

    return this.repository.save(schedule);
  }

  async updateSchedule(
    id: string,
    dto: Partial<{
      status: string;
      scheduledDate: string;
      completedDate: string;
      description: string;
      cost: number;
    }>,
  ): Promise<MaintenanceSchedule> {
    const updateData: Record<string, unknown> = {};
    if (dto.status !== undefined) updateData.status = dto.status;
    if (dto.description !== undefined) updateData.description = dto.description;
    if (dto.cost !== undefined) updateData.cost = dto.cost;
    if (dto.scheduledDate !== undefined)
      updateData.scheduledDate = new Date(dto.scheduledDate);
    if (dto.completedDate !== undefined)
      updateData.completedDate = new Date(dto.completedDate);
    await this.repository.update(id, updateData);
    return this.findOne(id);
  }

  async start(id: string): Promise<MaintenanceSchedule> {
    const schedule = await this.findOne(id);
    if (schedule.status !== MaintenanceStatus.PLANNED) {
      throw new BadRequestException('Only planned schedules can be started');
    }
    schedule.status = MaintenanceStatus.IN_PROGRESS;
    return this.repository.save(schedule);
  }

  async complete(id: string): Promise<MaintenanceSchedule> {
    const schedule = await this.findOne(id);
    if (schedule.status !== MaintenanceStatus.IN_PROGRESS) {
      throw new BadRequestException(
        'Only in-progress schedules can be completed',
      );
    }
    schedule.status = MaintenanceStatus.COMPLETED;
    schedule.completedDate = new Date();
    return this.repository.save(schedule);
  }

  async cancel(id: string): Promise<MaintenanceSchedule> {
    const schedule = await this.findOne(id);
    if (
      schedule.status === MaintenanceStatus.COMPLETED ||
      schedule.status === MaintenanceStatus.CANCELLED
    ) {
      throw new BadRequestException(
        'Cannot cancel a completed or already cancelled schedule',
      );
    }
    schedule.status = MaintenanceStatus.CANCELLED;
    return this.repository.save(schedule);
  }

  async updateTask(
    id: string,
    dto: Partial<{ status: string; actualHours: number; notes: string }>,
  ): Promise<MaintenanceTask> {
    await this.taskRepository.findOneOrFail({ where: { id } });
    const updateData: Record<string, unknown> = {};
    if (dto.status !== undefined) updateData.status = dto.status;
    if (dto.actualHours !== undefined) updateData.actualHours = dto.actualHours;
    if (dto.notes !== undefined) updateData.notes = dto.notes;
    await this.taskRepository.update(id, updateData);
    return this.taskRepository.findOneOrFail({ where: { id } });
  }

  async getByWorkCenter(workCenterId: string): Promise<MaintenanceSchedule[]> {
    return this.repository.find({
      where: { workCenterId },
      order: { scheduledDate: 'DESC' },
    });
  }

  async getUpcoming(days = 30): Promise<MaintenanceSchedule[]> {
    const future = new Date();
    future.setDate(future.getDate() + days);
    return this.repository.find({
      where: { status: MaintenanceStatus.PLANNED },
      order: { scheduledDate: 'ASC' },
      take: 50,
    });
  }
}
