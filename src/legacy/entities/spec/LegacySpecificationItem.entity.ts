import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SpecificationItem' })
export class LegacySpecificationItem {
  @PrimaryColumn({ type: 'bigint', name: 'SpecificationItemID' })
  specificationItemID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bigint', name: 'SpecificationRef' })
  specificationRef: number;

  @Column({ type: 'character varying', name: 'StringValue', nullable: true })
  stringValue: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DateValue', nullable: true })
  dateValue: Date | null;

  @Column({ type: 'numeric', name: 'DecimalValue', nullable: true })
  decimalValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}