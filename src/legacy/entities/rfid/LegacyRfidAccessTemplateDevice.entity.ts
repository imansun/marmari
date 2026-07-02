import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidAccessTemplateDevice' })
export class LegacyRfidAccessTemplateDevice {
  @PrimaryColumn({ type: 'bigint', name: 'RfidAccessTemplateDevicelID' })
  rfidAccessTemplateDevicelID: number;

  @Column({ type: 'bigint', name: 'RfidAccessTemplateRef' })
  rfidAccessTemplateRef: number;

  @Column({ type: 'bigint', name: 'RfidDeviceRef' })
  rfidDeviceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}