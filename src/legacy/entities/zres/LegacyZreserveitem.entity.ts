import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'zreserveitem' })
export class LegacyZreserveitem {
  @PrimaryColumn({ type: 'bigint', name: 'ReserveItemID' })
  reserveItemID: number;

  @PrimaryColumn({ type: 'integer', name: 'ReferenceType' })
  referenceType: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'State' })
  state: number;

  @PrimaryColumn({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @PrimaryColumn({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ExpirationDate' })
  expirationDate: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @PrimaryColumn({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @PrimaryColumn({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'ReserveRef' })
  reserveRef: number;

  @PrimaryColumn({ type: 'integer', name: 'CounterpartEntityCode' })
  counterpartEntityCode: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'CounterpartEntityRef' })
  counterpartEntityRef: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'CounterpartEntityText' })
  counterpartEntityText: string | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'numeric', name: 'EffectedMajorQuantity' })
  effectedMajorQuantity: number;

  @PrimaryColumn({ type: 'numeric', name: 'EffectedQuantity' })
  effectedQuantity: number;

  @PrimaryColumn({ type: 'numeric', name: 'SecondUnitQuantity' })
  secondUnitQuantity: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ReserveCreationDate' })
  reserveCreationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'StoreRef' })
  storeRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'DatesAsNumber' })
  datesAsNumber: number;

}