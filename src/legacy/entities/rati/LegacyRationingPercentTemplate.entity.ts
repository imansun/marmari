import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingPercentTemplate' })
export class LegacyRationingPercentTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'RationingPercentTemplateID' })
  rationingPercentTemplateID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'RationingSettingRef' })
  rationingSettingRef: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}