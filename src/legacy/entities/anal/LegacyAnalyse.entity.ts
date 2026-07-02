import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Analyse' })
export class LegacyAnalyse {
  @PrimaryColumn({ type: 'bigint', name: 'AnalyseID' })
  analyseID: number;

  @Column({ type: 'bigint', name: 'DebitVoucherItemRef' })
  debitVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'CreditVoucherItemRef' })
  creditVoucherItemRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'AccountSpecification' })
  accountSpecification: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}