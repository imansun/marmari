import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InstituteTrainer' })
export class LegacyInstituteTrainer {
  @PrimaryColumn({ type: 'bigint', name: 'InstituteTrainerID' })
  instituteTrainerID: number;

  @Column({ type: 'bigint', name: 'InstituteRef' })
  instituteRef: number;

  @Column({ type: 'bigint', name: 'TrainerRef' })
  trainerRef: number;

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