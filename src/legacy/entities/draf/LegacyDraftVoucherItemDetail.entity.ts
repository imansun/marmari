import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DraftVoucherItemDetail' })
export class LegacyDraftVoucherItemDetail {
  @PrimaryColumn({ type: 'bigint', name: 'DraftVoucherItemDetailID' })
  draftVoucherItemDetailID: number;

  @Column({ type: 'bigint', name: 'DraftVoucherItemRef' })
  draftVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'DocumentItemRef' })
  documentItemRef: number;

  @Column({ type: 'bigint', name: 'CostRef', nullable: true })
  costRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}