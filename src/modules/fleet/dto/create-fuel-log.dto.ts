import {
  IsString,
  IsNumber,
  IsDateString,
  IsOptional,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFuelLogDto {
  @ApiProperty()
  @IsString()
  vehicleId: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  cost: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  odometer?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  station?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
