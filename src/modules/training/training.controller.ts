import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { TrainingService } from './training.service';
import {
  CreateCourseDto,
  UpdateCourseDto,
  CreateSessionDto,
  UpdateSessionDto,
  UpdateAttendanceDto,
} from './dto/create-training.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Training')
@ApiBearerAuth()
@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post('courses')
  @Roles(UserRole.ADMIN, UserRole.HR, UserRole.MANAGER)
  @ApiOperation({ summary: 'Create a training course' })
  createCourse(@Body() dto: CreateCourseDto) {
    return this.trainingService.createCourse(dto);
  }

  @Get('courses')
  @ApiOperation({ summary: 'Get all courses' })
  findAllCourses(@Query() pagination: PaginationDto) {
    return this.trainingService.paginate(pagination, {
      order: { title: 'ASC' },
    });
  }

  @Get('courses/:id')
  @ApiOperation({ summary: 'Get course by ID' })
  findCourse(@Param('id') id: string) {
    return this.trainingService.findOne(id);
  }

  @Patch('courses/:id')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Update course' })
  updateCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.trainingService.update(id, dto);
  }

  @Delete('courses/:id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete course' })
  removeCourse(@Param('id') id: string) {
    return this.trainingService.softDelete(id);
  }

  @Post('sessions')
  @Roles(UserRole.ADMIN, UserRole.HR, UserRole.MANAGER)
  @ApiOperation({ summary: 'Create a training session' })
  createSession(@Body() dto: CreateSessionDto) {
    return this.trainingService.createSession(dto);
  }

  @Get('sessions')
  @ApiOperation({ summary: 'Get all sessions' })
  findAllSessions(@Query() pagination: PaginationDto) {
    return this.trainingService.paginateSessions(
      pagination.page,
      pagination.limit,
    );
  }

  @Get('sessions/:id')
  @ApiOperation({ summary: 'Get session by ID' })
  findSession(@Param('id') id: string) {
    return this.trainingService.findSession(id);
  }

  @Get('sessions/by-course/:courseId')
  @ApiOperation({ summary: 'Get sessions by course' })
  getSessionsByCourse(@Param('courseId') courseId: string) {
    return this.trainingService.getSessionsByCourse(courseId);
  }

  @Get('sessions/by-employee/:employeeId')
  @ApiOperation({ summary: 'Get sessions by employee' })
  getSessionsByEmployee(@Param('employeeId') employeeId: string) {
    return this.trainingService.getSessionsByEmployee(employeeId);
  }

  @Patch('sessions/:id')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Update session' })
  updateSession(@Param('id') id: string, @Body() dto: UpdateSessionDto) {
    return this.trainingService.updateSession(id, dto);
  }

  @Patch('attendances/:id')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Update attendance (score, status)' })
  updateAttendance(@Param('id') id: string, @Body() dto: UpdateAttendanceDto) {
    return this.trainingService.updateAttendance(id, dto);
  }
}
