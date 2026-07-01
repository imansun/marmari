import {
  IsString,
  IsEmail,
  IsDateString,
  IsUUID,
  IsOptional,
  IsEnum,
  IsNumber,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EmployeeStatus, EmploymentType } from '../entities/employee.entity';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'EMP-001' })
  @IsString()
  @MinLength(1)
  employeeNumber: string;

  @ApiProperty({ example: 'علی' })
  @IsString()
  @MinLength(2)
  firstName: string;

  @ApiProperty({ example: 'محمدی' })
  @IsString()
  @MinLength(2)
  lastName: string;

  @ApiProperty({ example: '0011234567' })
  @IsString()
  @MinLength(10)
  nationalId: string;

  @ApiPropertyOptional({ example: 'ali@example.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: '02112345678' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: '09121234567' })
  @IsOptional()
  @IsString()
  mobile?: string;

  @ApiProperty()
  @IsDateString()
  hireDate: Date;

  @ApiProperty({ example: 'مدیر مالی' })
  @IsString()
  @MinLength(2)
  position: string;

  @ApiProperty({ example: 'uuid-of-department' })
  @IsUUID()
  departmentId: string;

  @ApiProperty({ example: 15000000 })
  @IsNumber()
  @Min(0)
  baseSalary: number;

  @ApiPropertyOptional({
    enum: EmploymentType,
    default: EmploymentType.FULL_TIME,
  })
  @IsOptional()
  @IsEnum(EmploymentType)
  employmentType?: EmploymentType;

  @ApiPropertyOptional({ enum: EmployeeStatus, default: EmployeeStatus.ACTIVE })
  @IsOptional()
  @IsEnum(EmployeeStatus)
  status?: EmployeeStatus;
}

export class UpdateEmployeeDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  position?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  departmentId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  baseSalary?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  mobile?: string;

  @ApiPropertyOptional({ enum: EmployeeStatus })
  @IsOptional()
  @IsEnum(EmployeeStatus)
  status?: EmployeeStatus;
}
