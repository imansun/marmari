import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'JobDuty' })
export class LegacyJobDuty {
  @PrimaryColumn({ type: 'bigint', name: 'JobDutyID' })
  jobDutyID: number;

  @Column({ type: 'bigint', name: 'JobRef' })
  jobRef: number;

  @Column({ type: 'bigint', name: 'DutyRef' })
  dutyRef: number;

  @Column({ type: 'integer', name: 'CompetencyCode', nullable: true })
  competencyCode: number | null;

  @Column({ type: 'integer', name: 'CompetencyLevelCode', nullable: true })
  competencyLevelCode: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}