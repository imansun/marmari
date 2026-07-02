import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldVoucherItem' })
export class LegacyHandheldVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldVoucherItemID' })
  handheldVoucherItemID: number;

  @Column({ type: 'bigint', name: 'HandheldVoucherRef' })
  handheldVoucherRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'character varying', name: 'ReferenceValue', nullable: true })
  referenceValue: string | null;

  @Column({ type: 'character varying', name: 'ReternableValue', nullable: true })
  reternableValue: string | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'ReternableRef', nullable: true })
  reternableRef: number | null;

  @Column({ type: 'bigint', name: 'ReternableItemRef', nullable: true })
  reternableItemRef: number | null;

  @Column({ type: 'bigint', name: 'ItemReferenceRef', nullable: true })
  itemReferenceRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'boolean', name: 'IsBarcode' })
  isBarcode: boolean;

  @Column({ type: 'character varying', name: 'Barcode', nullable: true })
  barcode: string | null;

  @Column({ type: 'bigint', name: 'BarcodeTemplateRef', nullable: true })
  barcodeTemplateRef: number | null;

  @Column({ type: 'integer', name: 'TfCount' })
  tfCount: number;

  @Column({ type: 'character varying', name: 'TF1Value', nullable: true })
  tF1Value: string | null;

  @Column({ type: 'character varying', name: 'TF2Value', nullable: true })
  tF2Value: string | null;

  @Column({ type: 'character varying', name: 'TF3Value', nullable: true })
  tF3Value: string | null;

  @Column({ type: 'character varying', name: 'TF4Value', nullable: true })
  tF4Value: string | null;

  @Column({ type: 'character varying', name: 'TF5Value', nullable: true })
  tF5Value: string | null;

  @Column({ type: 'bigint', name: 'PTFRef1', nullable: true })
  pTFRef1: number | null;

  @Column({ type: 'bigint', name: 'PTFRef2', nullable: true })
  pTFRef2: number | null;

  @Column({ type: 'bigint', name: 'PTFRef3', nullable: true })
  pTFRef3: number | null;

  @Column({ type: 'bigint', name: 'PTFRef4', nullable: true })
  pTFRef4: number | null;

  @Column({ type: 'bigint', name: 'PTFRef5', nullable: true })
  pTFRef5: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'integer', name: 'Counterpart4EntityCode', nullable: true })
  counterpart4EntityCode: number | null;

  @Column({ type: 'character varying', name: 'Counterpart4Value', nullable: true })
  counterpart4Value: string | null;

  @Column({ type: 'character varying', name: 'DLCode5', nullable: true })
  dLCode5: string | null;

  @Column({ type: 'character varying', name: 'DLCode6', nullable: true })
  dLCode6: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'SecondUnitQuantity', nullable: true })
  secondUnitQuantity: number | null;

  @Column({ type: 'character varying', name: 'Additional1', nullable: true })
  additional1: string | null;

  @Column({ type: 'character varying', name: 'Additional2', nullable: true })
  additional2: string | null;

  @Column({ type: 'character varying', name: 'Additional3', nullable: true })
  additional3: string | null;

  @Column({ type: 'character varying', name: 'Additional4', nullable: true })
  additional4: string | null;

  @Column({ type: 'character varying', name: 'Additional5', nullable: true })
  additional5: string | null;

  @Column({ type: 'character varying', name: 'ReturnableValue', nullable: true })
  returnableValue: string | null;

  @Column({ type: 'bigint', name: 'ReturnableRef', nullable: true })
  returnableRef: number | null;

  @Column({ type: 'bigint', name: 'ReturnableItemRef', nullable: true })
  returnableItemRef: number | null;

  @Column({ type: 'character varying', name: 'Serial', nullable: true })
  serial: string | null;

}