import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationEquipment' })
export class LegacyConfirmationEquipment {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationEquipmentID' })
  confirmationEquipmentID: number;

  @Column({ type: 'bigint', name: 'WorkOrderEquipmentRef' })
  workOrderEquipmentRef: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef', nullable: true })
  confirmationRef: number | null;

  @Column({ type: 'bigint', name: 'WorkOrderOperationRef' })
  workOrderOperationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'OperationStatus' })
  operationStatus: number;

}