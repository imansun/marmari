import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationMachineMeasurementPointExtension' })
export class LegacyConfirmationMachineMeasurementPointExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationMachineMeasurementPointExtensionID' })
  confirmationMachineMeasurementPointExtensionID: number;

  @Column({ type: 'bigint', name: 'ConfirmationMachineRef' })
  confirmationMachineRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}