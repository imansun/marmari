import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationEquipmentTime' })
export class LegacyInspectionConfirmationEquipmentTime {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationEquipmentTimeID' })
  inspectionConfirmationEquipmentTimeID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationEquipmentRef' })
  inspectionConfirmationEquipmentRef: number;

  @Column({ type: 'integer', name: 'OperationStatus' })
  operationStatus: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationRef', nullable: true })
  inspectionConfirmationRef: number | null;

  @Column({ type: 'integer', name: 'StartTime', nullable: true })
  startTime: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}