import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ResourceToolExtension' })
export class LegacyResourceToolExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ResourceToolExtensionID' })
  resourceToolExtensionID: number;

  @Column({ type: 'bigint', name: 'ResourceToolRef' })
  resourceToolRef: number;

  @Column({ type: 'bigint', name: 'EquipmentMeasurementPointRef', nullable: true })
  equipmentMeasurementPointRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}