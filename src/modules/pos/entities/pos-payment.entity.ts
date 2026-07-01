import { Entity, Column } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum PaymentMethod {
  CASH = 'cash',
  CARD = 'card',
  CREDIT = 'credit',
  CHECK = 'check',
}

@Entity('pos_payments', { schema: 'public' })
export class PosPayment extends BaseEntity {
  @ApiProperty()
  @Column()
  orderId: string;

  @ApiProperty({ enum: PaymentMethod })
  @Column({ type: 'enum', enum: PaymentMethod })
  method: PaymentMethod;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  amount: number;

  @ApiPropertyOptional()
  @Column({ length: 100, nullable: true })
  reference?: string;

  @ApiProperty()
  @Column()
  sessionId: string;
}
