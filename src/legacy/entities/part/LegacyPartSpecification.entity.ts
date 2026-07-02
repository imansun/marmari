import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartSpecification' })
export class LegacyPartSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'PartSpecificationID' })
  partSpecificationID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'SpecificationRef' })
  specificationRef: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DateValue', nullable: true })
  dateValue: Date | null;

  @Column({ type: 'numeric', name: 'DecimalValue', nullable: true })
  decimalValue: number | null;

  @Column({ type: 'bigint', name: 'SpecificationItemRef', nullable: true })
  specificationItemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EntityGroupRef', nullable: true })
  entityGroupRef: number | null;

}