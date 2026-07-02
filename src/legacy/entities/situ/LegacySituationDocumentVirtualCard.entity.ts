import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SituationDocumentVirtualCard' })
export class LegacySituationDocumentVirtualCard {
  @PrimaryColumn({ type: 'bigint', name: 'SituationDocumentVirtualCardID' })
  situationDocumentVirtualCardID: number;

  @Column({ type: 'bigint', name: 'SituationDocumentRef' })
  situationDocumentRef: number;

  @Column({ type: 'character varying', name: 'TransactionNumber' })
  transactionNumber: string;

  @Column({ type: 'character varying', name: 'TerminalNumber' })
  terminalNumber: string;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'timestamp without time zone', name: 'RegistrationDate' })
  registrationDate: Date;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'VirtualCardProviderRef', nullable: true })
  virtualCardProviderRef: number | null;

}