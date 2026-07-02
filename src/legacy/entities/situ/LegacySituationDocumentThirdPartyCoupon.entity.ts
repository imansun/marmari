import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SituationDocumentThirdPartyCoupon' })
export class LegacySituationDocumentThirdPartyCoupon {
  @PrimaryColumn({ type: 'bigint', name: 'SituationDocumentThirdPartyCouponID' })
  situationDocumentThirdPartyCouponID: number;

  @Column({ type: 'bigint', name: 'SituationDocumentRef' })
  situationDocumentRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'ThirdPartyCouponTypeRef', nullable: true })
  thirdPartyCouponTypeRef: number | null;

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