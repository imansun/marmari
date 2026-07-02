import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IssuePermitItem' })
export class LegacyIssuePermitItem {
  @PrimaryColumn({ type: 'bigint', name: 'IssuePermitItemID' })
  issuePermitItemID: number;

  @Column({ type: 'bigint', name: 'IssuePermitRef' })
  issuePermitRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'text', name: 'ExtraData', nullable: true })
  extraData: string | null;

  @Column({ type: 'integer', name: 'CounterpartEntityCode', nullable: true })
  counterpartEntityCode: number | null;

  @Column({ type: 'bigint', name: 'CounterpartEntityRef', nullable: true })
  counterpartEntityRef: number | null;

  @Column({ type: 'character varying', name: 'CounterpartEntityText', nullable: true })
  counterpartEntityText: string | null;

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

  @Column({ type: 'numeric', name: 'IssuePermitTolerancePercent', default: 0 })
  issuePermitTolerancePercent: number;

  @Column({ type: 'numeric', name: 'MaxMajorUnitQuantity' })
  maxMajorUnitQuantity: number;

  @Column({ type: 'integer', name: 'PrevState', nullable: true })
  prevState: number | null;

  @Column({ type: 'character varying', name: 'ReferenceCode', nullable: true })
  referenceCode: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}