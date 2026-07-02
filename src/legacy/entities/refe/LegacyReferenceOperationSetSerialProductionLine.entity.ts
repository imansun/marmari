import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferenceOperationSetSerialProductionLine' })
export class LegacyReferenceOperationSetSerialProductionLine {
  @PrimaryColumn({ type: 'bigint', name: 'ReferenceOperationSetSerialProductionLineID' })
  referenceOperationSetSerialProductionLineID: number;

  @Column({ type: 'bigint', name: 'ReferenceOperationSetRef' })
  referenceOperationSetRef: number;

  @Column({ type: 'bigint', name: 'SerialProductionLineRef' })
  serialProductionLineRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}