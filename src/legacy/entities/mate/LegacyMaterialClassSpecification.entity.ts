import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaterialClassSpecification' })
export class LegacyMaterialClassSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'MaterialClassSpecificationID' })
  materialClassSpecificationID: number;

  @Column({ type: 'bigint', name: 'MaterialClassRef' })
  materialClassRef: number;

  @Column({ type: 'bigint', name: 'SpecificationRef' })
  specificationRef: number;

  @Column({ type: 'bigint', name: 'PartSpecificationRef', nullable: true })
  partSpecificationRef: number | null;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DateValue', nullable: true })
  dateValue: Date | null;

  @Column({ type: 'numeric', name: 'DecimalValue', nullable: true })
  decimalValue: number | null;

  @Column({ type: 'bigint', name: 'SpecificationItemRef', nullable: true })
  specificationItemRef: number | null;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EntityGroupRef', nullable: true })
  entityGroupRef: number | null;

}