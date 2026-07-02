import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionLineCollectedSerialSubset' })
export class LegacyProductionLineCollectedSerialSubset {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionLineCollectedSerialSubsetID' })
  productionLineCollectedSerialSubsetID: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'SerialRef', nullable: true })
  serialRef: number | null;

  @Column({ type: 'bigint', name: 'PartBarcodeRef', nullable: true })
  partBarcodeRef: number | null;

  @Column({ type: 'integer', name: 'SerialAction', nullable: true })
  serialAction: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'ReworkSerialAction', nullable: true })
  reworkSerialAction: number | null;

}