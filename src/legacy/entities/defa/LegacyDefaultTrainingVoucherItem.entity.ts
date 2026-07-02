import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DefaultTrainingVoucherItem' })
export class LegacyDefaultTrainingVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'DefaultTrainingVoucherItemID' })
  defaultTrainingVoucherItemID: number;

  @Column({ type: 'bigint', name: 'TrainingFactorRef' })
  trainingFactorRef: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'NatureCode' })
  natureCode: number;

  @Column({ type: 'bigint', name: 'DLTypeRef4', nullable: true })
  dLTypeRef4: number | null;

  @Column({ type: 'character varying', name: 'DLCode4', nullable: true })
  dLCode4: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef5', nullable: true })
  dLTypeRef5: number | null;

  @Column({ type: 'character varying', name: 'DLCode5', nullable: true })
  dLCode5: string | null;

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