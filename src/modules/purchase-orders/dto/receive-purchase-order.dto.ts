import { IsUUID, IsInt, Min, IsArray, ArrayMinSize } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReceiveItemDto {
  @ApiProperty({ example: 'uuid-of-po-item' })
  @IsUUID()
  itemId: string;

  @ApiProperty({ example: 50 })
  @IsInt()
  @Min(1)
  receivedQuantity: number;
}

export class ReceivePurchaseOrderDto {
  @ApiProperty({ type: [ReceiveItemDto] })
  @IsArray()
  @ArrayMinSize(1)
  items: ReceiveItemDto[];
}
