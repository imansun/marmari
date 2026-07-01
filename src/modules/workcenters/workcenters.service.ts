import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { WorkCenter } from './entities/work-center.entity';

@Injectable()
export class WorkcentersService extends CrudService<WorkCenter> {
  constructor(
    @InjectRepository(WorkCenter)
    repository: Repository<WorkCenter>,
  ) {
    super(repository);
  }

  async getActive(): Promise<WorkCenter[]> {
    return this.repository.find({
      where: { isActive: true },
      order: { name: 'ASC' },
    });
  }

  async findByDepartment(departmentId: string): Promise<WorkCenter[]> {
    return this.repository.find({
      where: { departmentId },
      order: { name: 'ASC' },
    });
  }
}
