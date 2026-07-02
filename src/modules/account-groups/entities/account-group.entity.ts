import { Entity, Column, ManyToOne, JoinColumn, Index, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

@Entity('account_group', { schema: 'public' })
export class AccountGroup extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ManyToOne(() => AccountGroup, { nullable: true })
  @JoinColumn({ name: 'parentId' })
  parent?: AccountGroup;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  parentId?: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => AccountGroup, (group) => group.parent)
  children: AccountGroup[];
}
