import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationEquipment' })
export class LegacyInspectionConfirmationEquipment {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationEquipmentID' })
  inspectionConfirmationEquipmentID: number;

  @Column({ type: 'bigint', name: 'InspectionEquipmentRef' })
  inspectionEquipmentRef: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationRef', nullable: true })
  inspectionConfirmationRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionOperationRef' })
  inspectionOperationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'OperationStatus' })
  operationStatus: number;

}