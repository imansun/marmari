import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { TaxTable } from './tax-table.entity';

@Entity('tax_table_items', { schema: 'public' })
export class TaxTableItem extends BaseEntity {
  @ManyToOne(() => TaxTable, (table) => table.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'taxTableId' })
  taxTable: TaxTable;

  @ApiProperty()
  @Column()
  taxTableId: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 5, scale: 2 })
  rate: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  minAmount?: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  maxAmount?: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  description?: string;
}
