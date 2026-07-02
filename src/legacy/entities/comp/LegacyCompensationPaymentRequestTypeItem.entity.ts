import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationPaymentRequestTypeItem' })
export class LegacyCompensationPaymentRequestTypeItem {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationPaymentRequestTypeItemID' })
  compensationPaymentRequestTypeItemID: number;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

  @Column({ type: 'bigint', name: 'CompensationPaymentRequestTypeRef' })
  compensationPaymentRequestTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}