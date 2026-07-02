import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DirectDeliveryReceiptItemDraftVoucher' })
export class LegacyDirectDeliveryReceiptItemDraftVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'DirectDeliveryReceiptItemDraftVoucherID' })
  directDeliveryReceiptItemDraftVoucherID: number;

  @Column({ type: 'bigint', name: 'DirectDeliveryReceiptItemRef' })
  directDeliveryReceiptItemRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'DraftVoucherRef' })
  draftVoucherRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsReverseInCalculation' })
  isReverseInCalculation: boolean;

}