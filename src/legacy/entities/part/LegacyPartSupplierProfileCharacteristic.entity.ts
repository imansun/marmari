import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartSupplierProfileCharacteristic' })
export class LegacyPartSupplierProfileCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'PartSupplierProfileCharacteristicID' })
  partSupplierProfileCharacteristicID: number;

  @Column({ type: 'bigint', name: 'PartSupplierProfileRef' })
  partSupplierProfileRef: number;

  @Column({ type: 'bigint', name: 'InspectionCharacteristicRef' })
  inspectionCharacteristicRef: number;

  @Column({ type: 'integer', name: 'VerificationLevel', nullable: true })
  verificationLevel: number | null;

  @Column({ type: 'integer', name: 'InspectionType' })
  inspectionType: number;

  @Column({ type: 'integer', name: 'NextInspectionType', nullable: true })
  nextInspectionType: number | null;

  @Column({ type: 'integer', name: 'RejectedCountInLastFiveInspections', nullable: true })
  rejectedCountInLastFiveInspections: number | null;

  @Column({ type: 'integer', name: 'RejectedCountInLastTenInspections', nullable: true })
  rejectedCountInLastTenInspections: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}