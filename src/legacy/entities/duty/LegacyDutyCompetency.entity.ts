import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DutyCompetency' })
export class LegacyDutyCompetency {
  @PrimaryColumn({ type: 'bigint', name: 'DutyCompetencyID' })
  dutyCompetencyID: number;

  @Column({ type: 'bigint', name: 'DutyRef' })
  dutyRef: number;

  @Column({ type: 'bigint', name: 'CompetencyRef' })
  competencyRef: number;

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