import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StandardVoucherTypeEntity' })
export class LegacyStandardVoucherTypeEntity {
  @PrimaryColumn({ type: 'bigint', name: 'StandardVoucherTypeEntityID' })
  standardVoucherTypeEntityID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}