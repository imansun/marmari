import { IsUUID, IsInt, Min, IsArray, ArrayMinSize } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ShipItemDto {
  @ApiProperty({ example: 'uuid-of-so-item' })
  @IsUUID()
  itemId: string;

  @ApiProperty({ example: 5 })
  @IsInt()
  @Min(1)
  shipQuantity: number;
}

export class ShipSalesOrderDto {
  @ApiProperty({ type: [ShipItemDto] })
  @IsArray()
  @ArrayMinSize(1)
  items: ShipItemDto[];
}
