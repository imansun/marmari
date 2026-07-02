import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GatheringProvider' })
export class LegacyGatheringProvider {
  @PrimaryColumn({ type: 'bigint', name: 'GatheringProviderID' })
  gatheringProviderID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En' })
  titleEn: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'bigint', name: 'TaxYearRef' })
  taxYearRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartTime', nullable: true })
  startTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'FinishTime', nullable: true })
  finishTime: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsFailed' })
  isFailed: boolean;

  @Column({ type: 'boolean', name: 'IsManual', default: false })
  isManual: boolean;

  @Column({ type: 'character varying', name: 'Message', nullable: true })
  message: string | null;

  @Column({ type: 'character varying', name: 'Exception', nullable: true })
  exception: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}