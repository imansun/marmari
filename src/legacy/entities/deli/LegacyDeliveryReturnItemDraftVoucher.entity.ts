import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeliveryReturnItemDraftVoucher' })
export class LegacyDeliveryReturnItemDraftVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'DeliveryReturnItemDraftVoucherID' })
  deliveryReturnItemDraftVoucherID: number;

  @Column({ type: 'bigint', name: 'DeliveryReturnItemRef' })
  deliveryReturnItemRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'DraftVoucherRef' })
  draftVoucherRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsReverseInCalculation' })
  isReverseInCalculation: boolean;

}