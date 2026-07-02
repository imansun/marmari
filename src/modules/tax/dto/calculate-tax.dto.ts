import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CalculateTaxDto {
  @ApiProperty({ example: 'VAT-STANDARD' })
  @IsString()
  tableCode: string;

  @ApiProperty({ example: 50000000 })
  @IsNumber()
  amount: number;
}
