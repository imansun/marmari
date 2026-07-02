import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartSupplierProfileCharacteristicInspectionResult' })
export class LegacyPartSupplierProfileCharacteristicInspectionResult {
  @PrimaryColumn({ type: 'bigint', name: 'PartSupplierProfileCharacteristicInspectionResultID' })
  partSupplierProfileCharacteristicInspectionResultID: number;

  @Column({ type: 'integer', name: 'Row' })
  row: number;

  @Column({ type: 'bigint', name: 'PartSupplierProfileCharacteristicRef' })
  partSupplierProfileCharacteristicRef: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'character varying', name: 'InspectionNumber', nullable: true })
  inspectionNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'InspectionDate' })
  inspectionDate: Date;

  @Column({ type: 'integer', name: 'InspectionState' })
  inspectionState: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'PreviousReferenceRef', nullable: true })
  previousReferenceRef: number | null;

  @Column({ type: 'integer', name: 'PreviousNextInspectionType', nullable: true })
  previousNextInspectionType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}