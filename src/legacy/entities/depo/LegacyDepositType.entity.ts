import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DepositType' })
export class LegacyDepositType {
  @PrimaryColumn({ type: 'bigint', name: 'DepositTypeID' })
  depositTypeID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}