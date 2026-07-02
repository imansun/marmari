import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartRequestItem' })
export class LegacyPartRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'PartRequestItemID' })
  partRequestItemID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PartRequestRef' })
  partRequestRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'timestamp without time zone', name: 'DateOfNeed' })
  dateOfNeed: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'EffectedMajorQuantity' })
  effectedMajorQuantity: number;

  @Column({ type: 'numeric', name: 'EffectedQuantity' })
  effectedQuantity: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'integer', name: 'CounterpartEntityCode', nullable: true })
  counterpartEntityCode: number | null;

  @Column({ type: 'bigint', name: 'CounterpartEntityRef', nullable: true })
  counterpartEntityRef: number | null;

  @Column({ type: 'character varying', name: 'CounterpartEntityText', nullable: true })
  counterpartEntityText: string | null;

  @Column({ type: 'character varying', name: 'PartDesc', nullable: true })
  partDesc: string | null;

  @Column({ type: 'bigint', name: 'DummyPartRef', nullable: true })
  dummyPartRef: number | null;

  @Column({ type: 'bigint', name: 'DummyPartUnitRef', nullable: true })
  dummyPartUnitRef: number | null;

  @Column({ type: 'integer', name: 'ReserveState', nullable: true })
  reserveState: number | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'PrevState', nullable: true })
  prevState: number | null;

  @Column({ type: 'numeric', name: 'PrimitiveQuantity' })
  primitiveQuantity: number;

  @Column({ type: 'character varying', name: 'Level5DLCode', nullable: true })
  level5DLCode: string | null;

  @Column({ type: 'character varying', name: 'Level6DLCode', nullable: true })
  level6DLCode: string | null;

  @Column({ type: 'character varying', name: 'Level5DLTitle', nullable: true })
  level5DLTitle: string | null;

  @Column({ type: 'character varying', name: 'Level6DLTitle', nullable: true })
  level6DLTitle: string | null;

  @Column({ type: 'bigint', name: 'Level5DLRef', nullable: true })
  level5DLRef: number | null;

  @Column({ type: 'bigint', name: 'Level6DLRef', nullable: true })
  level6DLRef: number | null;

  @Column({ type: 'numeric', name: 'TolerancePercent' })
  tolerancePercent: number;

}