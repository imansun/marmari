import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ManufacturingOrderSerialStatus' })
export class LegacyManufacturingOrderSerialStatus {
  @PrimaryColumn({ type: 'bigint', name: 'ManufacturingOrderSerialStatusID' })
  manufacturingOrderSerialStatusID: number;

  @Column({ type: 'bigint', name: 'ManufacturingOrderRef' })
  manufacturingOrderRef: number;

  @Column({ type: 'integer', name: 'SerialStatus' })
  serialStatus: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}