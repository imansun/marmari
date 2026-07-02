import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TermOfPayment' })
export class LegacyTermOfPayment {
  @PrimaryColumn({ type: 'bigint', name: 'TermOfPaymentID' })
  termOfPaymentID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'TermOfPaymentType' })
  termOfPaymentType: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'PricingConditionType' })
  pricingConditionType: number;

  @Column({ type: 'boolean', name: 'SuretyBondIsNeeded', nullable: true })
  suretyBondIsNeeded: boolean | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}