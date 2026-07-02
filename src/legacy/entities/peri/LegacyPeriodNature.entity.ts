import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PeriodNature' })
export class LegacyPeriodNature {
  @PrimaryColumn({ type: 'bigint', name: 'PeriodNatureID' })
  periodNatureID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}