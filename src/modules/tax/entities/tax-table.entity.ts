import { Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { TaxTableItem } from './tax-table-item.entity';

@Entity('tax_tables', { schema: 'public' })
export class TaxTable extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty()
  @Column({ type: 'date' })
  effectiveFrom: string;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  effectiveTo?: string;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => TaxTableItem, (item) => item.taxTable, { cascade: true })
  items: TaxTableItem[];
}
