import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SituationDocumentCoupon' })
export class LegacySituationDocumentCoupon {
  @PrimaryColumn({ type: 'bigint', name: 'SituationDocumentCouponID' })
  situationDocumentCouponID: number;

  @Column({ type: 'bigint', name: 'SituationDocumentRef' })
  situationDocumentRef: number;

  @Column({ type: 'character varying', name: 'SerialNumber' })
  serialNumber: string;

  @Column({ type: 'bigint', name: 'CouponTemplateRef', nullable: true })
  couponTemplateRef: number | null;

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