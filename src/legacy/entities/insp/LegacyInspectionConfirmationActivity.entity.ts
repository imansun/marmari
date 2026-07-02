import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationActivity' })
export class LegacyInspectionConfirmationActivity {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationActivityID' })
  inspectionConfirmationActivityID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationEquipmentRef' })
  inspectionConfirmationEquipmentRef: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationRef', nullable: true })
  inspectionConfirmationRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionOperationActivityRef' })
  inspectionOperationActivityRef: number;

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

}