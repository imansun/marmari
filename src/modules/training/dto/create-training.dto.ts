import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsArray,
  IsUUID,
  IsBoolean,
  IsDateString,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CourseType } from '../entities/training-course.entity';
import { SessionStatus } from '../entities/training-session.entity';
import { AttendeeStatus } from '../entities/training-attendance.entity';

export class CreateCourseDto {
  @ApiProperty({ example: 'TRN-001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'Excel پیشرفته' })
  @IsString()
  @MinLength(2)
  title: string;

  @ApiProperty({ enum: CourseType })
  @IsEnum(CourseType)
  courseType: CourseType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  duration?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  cost?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  provider?: string;
}

export class UpdateCourseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  cost?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class CreateSessionDto {
  @ApiProperty()
  @IsUUID()
  courseId: string;

  @ApiProperty()
  @IsDateString()
  startDate: string;

  @ApiProperty()
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  instructor?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsUUID('4', { each: true })
  attendeeIds: string[];
}

export class UpdateSessionDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(SessionStatus)
  status?: SessionStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  instructor?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location?: string;
}

export class UpdateAttendanceDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(AttendeeStatus)
  status?: AttendeeStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  score?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  feedback?: string;
}
