import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum BankType {
  CENTRAL = 'central',
  COMMERCIAL = 'commercial',
  SPECIALIZED = 'specialized',
  PRIVATE = 'private',
}

@Entity('banks', { schema: 'public' })
export class Bank extends BaseEntity {
  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiPropertyOptional()
  @Column({ length: 200, nullable: true })
  nameEn?: string;

  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiPropertyOptional()
  @Column({ length: 20, nullable: true })
  swiftCode?: string;

  @ApiPropertyOptional()
  @Column({ length: 50, nullable: true })
  phone?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  website?: string;

  @ApiProperty({ enum: BankType })
  @Column({
    type: 'enum',
    enum: BankType,
    default: BankType.COMMERCIAL,
  })
  bankType: BankType;
}
