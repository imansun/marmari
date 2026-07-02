import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FundRequestItem' })
export class LegacyFundRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'FundRequestItemID' })
  fundRequestItemID: number;

  @Column({ type: 'bigint', name: 'FundRequestRef' })
  fundRequestRef: number;

  @Column({ type: 'bigint', name: 'RefundDepositItemRef' })
  refundDepositItemRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}