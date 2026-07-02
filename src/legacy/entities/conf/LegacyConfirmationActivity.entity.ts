import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationActivity' })
export class LegacyConfirmationActivity {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationActivityID' })
  confirmationActivityID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef', nullable: true })
  confirmationRef: number | null;

  @Column({ type: 'bigint', name: 'WorkOrderOperationActivityRef' })
  workOrderOperationActivityRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EquipmentMeasurementPointRef', nullable: true })
  equipmentMeasurementPointRef: number | null;

  @Column({ type: 'bigint', name: 'ConfirmationEquipmentRef' })
  confirmationEquipmentRef: number;

}