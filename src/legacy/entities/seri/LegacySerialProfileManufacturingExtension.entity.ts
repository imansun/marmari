import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialProfileManufacturingExtension' })
export class LegacySerialProfileManufacturingExtension {
  @PrimaryColumn({ type: 'bigint', name: 'SerialProfileManufacturingExtensionID' })
  serialProfileManufacturingExtensionID: number;

  @Column({ type: 'bigint', name: 'SerialProfileRef' })
  serialProfileRef: number;

  @Column({ type: 'boolean', name: 'GenerateSerialBasedOnProductionOrder' })
  generateSerialBasedOnProductionOrder: boolean;

  @Column({ type: 'boolean', name: 'ProductionTracking' })
  productionTracking: boolean;

  @Column({ type: 'boolean', name: 'MaterialTracking' })
  materialTracking: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}