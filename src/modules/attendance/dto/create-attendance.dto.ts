import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsDateString,
  IsUUID,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AttendanceStatus } from '../entities/attendance-record.entity';
import { LeaveType, LeaveStatus } from '../entities/leave-request.entity';

export class CreateAttendanceDto {
  @ApiProperty()
  @IsUUID()
  employeeId: string;

  @ApiProperty({ example: '2026-07-01' })
  @IsDateString()
  date: string;

  @ApiPropertyOptional({ example: '08:00' })
  @IsOptional()
  @IsString()
  checkIn?: string;

  @ApiPropertyOptional({ example: '16:00' })
  @IsOptional()
  @IsString()
  checkOut?: string;

  @ApiPropertyOptional({ default: AttendanceStatus.PRESENT })
  @IsOptional()
  @IsEnum(AttendanceStatus)
  status?: AttendanceStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  hoursWorked?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  overtimeHours?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateAttendanceDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  checkIn?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  checkOut?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(AttendanceStatus)
  status?: AttendanceStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  hoursWorked?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  overtimeHours?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class CreateLeaveDto {
  @ApiProperty()
  @IsUUID()
  employeeId: string;

  @ApiProperty({ enum: LeaveType })
  @IsEnum(LeaveType)
  leaveType: LeaveType;

  @ApiProperty()
  @IsDateString()
  startDate: string;

  @ApiProperty()
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  reason?: string;
}

export class UpdateLeaveDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(LeaveStatus)
  status?: LeaveStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  approvedById?: string;
}
