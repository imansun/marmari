import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentAgreement' })
export class LegacyPaymentAgreement {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentAgreementID' })
  paymentAgreementID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'integer', name: 'InstalmentBaseDateType' })
  instalmentBaseDateType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'boolean', name: 'ReceiptDateIsBaseOnSettlementDate' })
  receiptDateIsBaseOnSettlementDate: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}