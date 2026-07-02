import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartBarcode' })
export class LegacyPartBarcode {
  @PrimaryColumn({ type: 'bigint', name: 'PartBarcodeID' })
  partBarcodeID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'character varying', name: 'Barcode' })
  barcode: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'boolean', name: 'IsDefault', default: false })
  isDefault: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}