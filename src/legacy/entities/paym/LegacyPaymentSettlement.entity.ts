import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentSettlement' })
export class LegacyPaymentSettlement {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentSettlementID' })
  paymentSettlementID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'BaseDate', nullable: true })
  baseDate: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}