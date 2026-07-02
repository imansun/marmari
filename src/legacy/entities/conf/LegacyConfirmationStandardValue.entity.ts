import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationStandardValue' })
export class LegacyConfirmationStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationStandardValueID' })
  confirmationStandardValueID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'WorkOrderOperationStandardValueRef' })
  workOrderOperationStandardValueRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}