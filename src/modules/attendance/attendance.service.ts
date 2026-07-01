import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import {
  AttendanceRecord,
  AttendanceStatus,
} from './entities/attendance-record.entity';
import {
  LeaveRequest,
  LeaveStatus,
  LeaveType,
} from './entities/leave-request.entity';

@Injectable()
export class AttendanceService extends CrudService<AttendanceRecord> {
  constructor(
    @InjectRepository(AttendanceRecord)
    repository: Repository<AttendanceRecord>,
    @InjectRepository(LeaveRequest)
    private readonly leaveRepository: Repository<LeaveRequest>,
  ) {
    super(repository);
  }

  async recordAttendance(dto: {
    employeeId: string;
    date: string;
    checkIn?: string;
    checkOut?: string;
    status?: string;
    hoursWorked?: number;
    overtimeHours?: number;
    notes?: string;
  }): Promise<AttendanceRecord> {
    const existing = await this.repository.findOne({
      where: { employeeId: dto.employeeId, date: dto.date },
    });
    if (existing)
      throw new ConflictException('Attendance already recorded for this date');

    return this.repository.save(
      this.repository.create({
        employeeId: dto.employeeId,
        date: dto.date,
        checkIn: dto.checkIn,
        checkOut: dto.checkOut,
        status: (dto.status as AttendanceStatus) ?? AttendanceStatus.PRESENT,
        hoursWorked: dto.hoursWorked ?? 0,
        overtimeHours: dto.overtimeHours ?? 0,
        notes: dto.notes,
      }),
    );
  }

  async updateAttendance(
    id: string,
    dto: Partial<{
      checkIn: string;
      checkOut: string;
      status: AttendanceStatus;
      hoursWorked: number;
      overtimeHours: number;
      notes: string;
    }>,
  ): Promise<AttendanceRecord> {
    await this.findOne(id);
    const updateData: Record<string, unknown> = {};
    if (dto.checkIn !== undefined) updateData.checkIn = dto.checkIn;
    if (dto.checkOut !== undefined) updateData.checkOut = dto.checkOut;
    if (dto.status !== undefined) updateData.status = dto.status;
    if (dto.hoursWorked !== undefined) updateData.hoursWorked = dto.hoursWorked;
    if (dto.overtimeHours !== undefined)
      updateData.overtimeHours = dto.overtimeHours;
    if (dto.notes !== undefined) updateData.notes = dto.notes;
    await this.repository.update(id, updateData);
    return this.findOne(id);
  }

  async getByEmployee(employeeId: string): Promise<AttendanceRecord[]> {
    return this.repository.find({
      where: { employeeId },
      order: { date: 'DESC' },
    });
  }

  async getByDateRange(
    employeeId: string,
    startDate: string,
    endDate: string,
  ): Promise<AttendanceRecord[]> {
    const records = await this.repository.find({
      where: { employeeId },
      order: { date: 'ASC' },
    });
    return records.filter((r) => r.date >= startDate && r.date <= endDate);
  }

  async createLeave(dto: {
    employeeId: string;
    leaveType: string;
    startDate: string;
    endDate: string;
    reason?: string;
  }): Promise<LeaveRequest> {
    return this.leaveRepository.save(
      this.leaveRepository.create({
        employeeId: dto.employeeId,
        leaveType: dto.leaveType as LeaveType,
        status: LeaveStatus.PENDING,
        startDate: dto.startDate,
        endDate: dto.endDate,
        reason: dto.reason,
      }),
    );
  }

  async updateLeave(
    id: string,
    dto: Partial<{ status: LeaveStatus; approvedById: string }>,
  ): Promise<LeaveRequest> {
    const leave = await this.leaveRepository.findOneOrFail({ where: { id } });

    const updateData: Record<string, unknown> = {};
    if (dto.status !== undefined) {
      if (leave.status !== LeaveStatus.PENDING) {
        throw new BadRequestException('Only pending leaves can be updated');
      }
      updateData.status = dto.status;
    }
    if (dto.approvedById !== undefined) {
      updateData.approvedById = dto.approvedById;
      updateData.approvedAt = new Date();
    }
    await this.leaveRepository.update(id, updateData);
    return this.leaveRepository.findOneOrFail({ where: { id } });
  }

  async getLeavesByEmployee(employeeId: string): Promise<LeaveRequest[]> {
    return this.leaveRepository.find({
      where: { employeeId },
      order: { startDate: 'DESC' },
    });
  }

  async getPendingLeaves(): Promise<LeaveRequest[]> {
    return this.leaveRepository.find({
      where: { status: LeaveStatus.PENDING },
      order: { createdAt: 'ASC' },
    });
  }

  async paginateLeaves(
    page = 1,
    limit = 50,
  ): Promise<{ data: LeaveRequest[]; meta: any }> {
    const [data, total] = await this.leaveRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });
    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findLeave(id: string): Promise<LeaveRequest> {
    return this.leaveRepository.findOneOrFail({ where: { id } });
  }
}
