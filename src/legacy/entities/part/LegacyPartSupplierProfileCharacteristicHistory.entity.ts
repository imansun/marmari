import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartSupplierProfileCharacteristicHistory' })
export class LegacyPartSupplierProfileCharacteristicHistory {
  @PrimaryColumn({ type: 'bigint', name: 'PartSupplierProfileCharacteristicHistoryID' })
  partSupplierProfileCharacteristicHistoryID: number;

  @Column({ type: 'bigint', name: 'PartSupplierProfileCharacteristicRef' })
  partSupplierProfileCharacteristicRef: number;

  @Column({ type: 'integer', name: 'VerificationLevel', nullable: true })
  verificationLevel: number | null;

  @Column({ type: 'bigint', name: 'InspectionCharacteristicRef' })
  inspectionCharacteristicRef: number;

  @Column({ type: 'integer', name: 'SourceInspectionType' })
  sourceInspectionType: number;

  @Column({ type: 'integer', name: 'DestinationInspectionType' })
  destinationInspectionType: number;

  @Column({ type: 'integer', name: 'SourceNextInspectionType', nullable: true })
  sourceNextInspectionType: number | null;

  @Column({ type: 'integer', name: 'DestinationNextInspectionType', nullable: true })
  destinationNextInspectionType: number | null;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}