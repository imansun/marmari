import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CrudService } from '../../core';
import { TrainingCourse, CourseType } from './entities/training-course.entity';
import {
  TrainingSession,
  SessionStatus,
} from './entities/training-session.entity';
import {
  TrainingAttendance,
  AttendeeStatus,
} from './entities/training-attendance.entity';

@Injectable()
export class TrainingService extends CrudService<TrainingCourse> {
  constructor(
    @InjectRepository(TrainingCourse)
    repository: Repository<TrainingCourse>,
    @InjectRepository(TrainingSession)
    private readonly sessionRepository: Repository<TrainingSession>,
    @InjectRepository(TrainingAttendance)
    private readonly attendanceRepository: Repository<TrainingAttendance>,
  ) {
    super(repository);
  }

  async createCourse(dto: {
    code: string;
    title: string;
    courseType: string;
    description?: string;
    duration?: number;
    cost?: number;
    provider?: string;
  }): Promise<TrainingCourse> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Course code already exists');

    return this.repository.save(
      this.repository.create({
        code: dto.code,
        title: dto.title,
        courseType: dto.courseType as CourseType,
        description: dto.description,
        duration: dto.duration,
        cost: dto.cost ?? 0,
        provider: dto.provider,
        isActive: true,
      }),
    );
  }

  async createSession(dto: {
    courseId: string;
    startDate: string;
    endDate: string;
    instructor?: string;
    location?: string;
    attendeeIds: string[];
  }): Promise<TrainingSession> {
    const course = await this.findOne(dto.courseId);
    if (!course) throw new BadRequestException('Course not found');

    const attendees = dto.attendeeIds.map((empId) =>
      this.attendanceRepository.create({
        employeeId: empId,
        status: AttendeeStatus.REGISTERED,
      }),
    );

    const session = this.sessionRepository.create({
      courseId: dto.courseId,
      startDate: new Date(dto.startDate),
      endDate: new Date(dto.endDate),
      instructor: dto.instructor,
      location: dto.location,
      status: SessionStatus.PLANNED,
      attendees,
    });

    return this.sessionRepository.save(session);
  }

  async updateSession(
    id: string,
    dto: Partial<{ status: string; instructor: string; location: string }>,
  ): Promise<TrainingSession> {
    await this.sessionRepository.findOneOrFail({ where: { id } });
    const updateData: Record<string, unknown> = {};
    if (dto.status !== undefined) updateData.status = dto.status;
    if (dto.instructor !== undefined) updateData.instructor = dto.instructor;
    if (dto.location !== undefined) updateData.location = dto.location;
    await this.sessionRepository.update(id, updateData);
    return this.sessionRepository.findOneOrFail({ where: { id } });
  }

  async updateAttendance(
    id: string,
    dto: Partial<{ status: string; score: number; feedback: string }>,
  ): Promise<TrainingAttendance> {
    await this.attendanceRepository.findOneOrFail({ where: { id } });
    const updateData: Record<string, unknown> = {};
    if (dto.status !== undefined) updateData.status = dto.status;
    if (dto.score !== undefined) updateData.score = dto.score;
    if (dto.feedback !== undefined) updateData.feedback = dto.feedback;
    await this.attendanceRepository.update(id, updateData);
    return this.attendanceRepository.findOneOrFail({ where: { id } });
  }

  async getSessionsByCourse(courseId: string): Promise<TrainingSession[]> {
    return this.sessionRepository.find({
      where: { courseId },
      order: { startDate: 'DESC' },
    });
  }

  async getSessionsByEmployee(employeeId: string): Promise<TrainingSession[]> {
    const atts = await this.attendanceRepository.find({
      where: { employeeId },
    });
    const ids = atts.map((a) => a.sessionId);
    if (ids.length === 0) return [];
    return this.sessionRepository.find({ where: { id: In(ids) } });
  }

  async paginateSessions(
    page = 1,
    limit = 50,
  ): Promise<{ data: TrainingSession[]; meta: any }> {
    const [data, total] = await this.sessionRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { startDate: 'DESC' },
    });
    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findSession(id: string): Promise<TrainingSession> {
    return this.sessionRepository.findOneOrFail({ where: { id } });
  }
}
