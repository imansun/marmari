import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BarCodeInventoryVoucherProperty' })
export class LegacyBarCodeInventoryVoucherProperty {
  @PrimaryColumn({ type: 'bigint', name: 'BarCodeInventoryVoucherPropertyID' })
  barCodeInventoryVoucherPropertyID: number;

  @Column({ type: 'bigint', name: 'BarcodeTemplateRef' })
  barcodeTemplateRef: number;

  @Column({ type: 'integer', name: 'Position' })
  position: number;

  @Column({ type: 'integer', name: 'InventoryVoucherProperty' })
  inventoryVoucherProperty: number;

  @Column({ type: 'integer', name: 'StartIndex' })
  startIndex: number;

  @Column({ type: 'integer', name: 'EndIndex' })
  endIndex: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}