import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationMachineEquipmentMeasurementPoint' })
export class LegacyConfirmationMachineEquipmentMeasurementPoint {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationMachineEquipmentMeasurementPointID' })
  confirmationMachineEquipmentMeasurementPointID: number;

  @Column({ type: 'bigint', name: 'EquipmentMeasurementPointRef' })
  equipmentMeasurementPointRef: number;

  @Column({ type: 'boolean', name: 'IsPACMeasurementParameter' })
  isPACMeasurementParameter: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}