import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PostDuty' })
export class LegacyPostDuty {
  @PrimaryColumn({ type: 'bigint', name: 'PostDutyID' })
  postDutyID: number;

  @Column({ type: 'bigint', name: 'PostRef' })
  postRef: number;

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