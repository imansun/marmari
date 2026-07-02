import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesTerminal' })
export class LegacySalesTerminal {
  @PrimaryColumn({ type: 'bigint', name: 'SalesTerminalID' })
  salesTerminalID: number;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'bigint', name: 'TerminalDeliverRef', nullable: true })
  terminalDeliverRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentServiceProviderCompanyRef' })
  paymentServiceProviderCompanyRef: number;

  @Column({ type: 'character varying', name: 'MerchantNumber' })
  merchantNumber: string;

  @Column({ type: 'character varying', name: 'TerminalNumber' })
  terminalNumber: string;

  @Column({ type: 'integer', name: 'POSConditionType' })
  pOSConditionType: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}