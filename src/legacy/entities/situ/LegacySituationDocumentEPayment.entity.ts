import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SituationDocumentEPayment' })
export class LegacySituationDocumentEPayment {
  @PrimaryColumn({ type: 'bigint', name: 'SituationDocumentEPaymentID' })
  situationDocumentEPaymentID: number;

  @Column({ type: 'bigint', name: 'SituationDocumentRef' })
  situationDocumentRef: number;

  @Column({ type: 'character varying', name: 'TrackingNumber' })
  trackingNumber: string;

  @Column({ type: 'bigint', name: 'SourceBankAccountRef', nullable: true })
  sourceBankAccountRef: number | null;

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

}