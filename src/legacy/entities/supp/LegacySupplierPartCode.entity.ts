import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SupplierPartCode' })
export class LegacySupplierPartCode {
  @PrimaryColumn({ type: 'bigint', name: 'SupplierPartCodeID' })
  supplierPartCodeID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}