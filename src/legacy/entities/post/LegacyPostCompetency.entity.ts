import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PostCompetency' })
export class LegacyPostCompetency {
  @PrimaryColumn({ type: 'bigint', name: 'PostCompetencyID' })
  postCompetencyID: number;

  @Column({ type: 'bigint', name: 'PostRef' })
  postRef: number;

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