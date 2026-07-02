import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartFixedBarcode' })
export class LegacyPartFixedBarcode {
  @PrimaryColumn({ type: 'bigint', name: 'PartFixedBarcodeID' })
  partFixedBarcodeID: number;

  @Column({ type: 'character varying', name: 'PartCode' })
  partCode: string;

  @Column({ type: 'character varying', name: 'Barcode' })
  barcode: string;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}