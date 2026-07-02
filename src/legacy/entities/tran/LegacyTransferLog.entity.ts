import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransferLog' })
export class LegacyTransferLog {
  @PrimaryColumn({ type: 'bigint', name: 'TransferLogID' })
  transferLogID: number;

  @Column({ type: 'bigint', name: 'SourceCorrespondentRef' })
  sourceCorrespondentRef: number;

  @Column({ type: 'bigint', name: 'TargetCorrespondentRef', nullable: true })
  targetCorrespondentRef: number | null;

  @Column({ type: 'bigint', name: 'TransfererUser' })
  transfererUser: number;

  @Column({ type: 'timestamp without time zone', name: 'TransferDate' })
  transferDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}