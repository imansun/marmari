import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationReceiptPermit' })
export class LegacyConfirmationReceiptPermit {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationReceiptPermitID' })
  confirmationReceiptPermitID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'integer', name: 'ProductType', nullable: true })
  productType: number | null;

  @Column({ type: 'bigint', name: 'ReceiptPermitRef' })
  receiptPermitRef: number;

  @Column({ type: 'boolean', name: 'IsAuto', default: false })
  isAuto: boolean;

}