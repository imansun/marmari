import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerSerialNumber' })
export class LegacyTaxPayerSerialNumber {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerSerialNumberID' })
  taxPayerSerialNumberID: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'integer', name: 'SourceEntityType', nullable: true })
  sourceEntityType: number | null;

  @Column({ type: 'bigint', name: 'SourceEntityRef', nullable: true })
  sourceEntityRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'SourceActionType', nullable: true })
  sourceActionType: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ActualReferenceDate', nullable: true })
  actualReferenceDate: Date | null;

  @Column({ type: 'boolean', name: 'Ignore' })
  ignore: boolean;

}