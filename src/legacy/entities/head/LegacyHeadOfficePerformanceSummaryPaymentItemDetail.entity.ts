import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HeadOfficePerformanceSummaryPaymentItemDetail' })
export class LegacyHeadOfficePerformanceSummaryPaymentItemDetail {
  @PrimaryColumn({ type: 'bigint', name: 'HeadOfficePerformanceSummaryPaymentItemDetailID' })
  headOfficePerformanceSummaryPaymentItemDetailID: number;

  @Column({ type: 'bigint', name: 'HeadOfficePerformanceSummaryPaymentItemRef' })
  headOfficePerformanceSummaryPaymentItemRef: number;

  @Column({ type: 'bigint', name: 'DataRef' })
  dataRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'timestamp without time zone', name: 'DepositDate', nullable: true })
  depositDate: Date | null;

  @Column({ type: 'character varying', name: 'TerminalNumber', nullable: true })
  terminalNumber: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}