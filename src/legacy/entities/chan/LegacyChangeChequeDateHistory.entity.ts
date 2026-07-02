import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ChangeChequeDateHistory' })
export class LegacyChangeChequeDateHistory {
  @PrimaryColumn({ type: 'bigint', name: 'ChangeChequeDateHistoryID' })
  changeChequeDateHistoryID: number;

  @Column({ type: 'bigint', name: 'ChequeRef' })
  chequeRef: number;

  @Column({ type: 'boolean', name: 'IsReceivable' })
  isReceivable: boolean;

  @Column({ type: 'timestamp without time zone', name: 'DueDate' })
  dueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'AgreementDate' })
  agreementDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}