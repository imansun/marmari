import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaintenancePartExtension' })
export class LegacyMaintenancePartExtension {
  @PrimaryColumn({ type: 'bigint', name: 'MaintenancePartExtensionID' })
  maintenancePartExtensionID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'boolean', name: 'CanUseAsSparePart' })
  canUseAsSparePart: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}