import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartMedicalSpecification' })
export class LegacyPartMedicalSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'PartMedicalSpecificationID' })
  partMedicalSpecificationID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'GenericRef', nullable: true })
  genericRef: number | null;

  @Column({ type: 'character varying', name: 'GTIN', nullable: true })
  gTIN: string | null;

  @Column({ type: 'character varying', name: 'IranCode', nullable: true })
  iranCode: string | null;

  @Column({ type: 'integer', name: 'MedicalCategory', nullable: true })
  medicalCategory: number | null;

  @Column({ type: 'integer', name: 'PhysicalShape', nullable: true })
  physicalShape: number | null;

  @Column({ type: 'integer', name: 'MedicalProductionType', nullable: true })
  medicalProductionType: number | null;

  @Column({ type: 'integer', name: 'Dosage', nullable: true })
  dosage: number | null;

  @Column({ type: 'bigint', name: 'ProducerRef', nullable: true })
  producerRef: number | null;

  @Column({ type: 'bigint', name: 'SupplierRef', nullable: true })
  supplierRef: number | null;

  @Column({ type: 'boolean', name: 'IsOpioid', default: false })
  isOpioid: boolean;

  @Column({ type: 'boolean', name: 'IsStoredInFridge', default: false })
  isStoredInFridge: boolean;

  @Column({ type: 'boolean', name: 'IsUnderControl', default: false })
  isUnderControl: boolean;

  @Column({ type: 'boolean', name: 'IsChemotherapy', default: false })
  isChemotherapy: boolean;

  @Column({ type: 'character varying', name: 'UseCases', nullable: true })
  useCases: string | null;

  @Column({ type: 'character varying', name: 'UseInstructions', nullable: true })
  useInstructions: string | null;

  @Column({ type: 'character varying', name: 'Cautions', nullable: true })
  cautions: string | null;

  @Column({ type: 'character varying', name: 'SideEffects', nullable: true })
  sideEffects: string | null;

  @Column({ type: 'character varying', name: 'StorageConditions', nullable: true })
  storageConditions: string | null;

  @Column({ type: 'character varying', name: 'PatientInstructions', nullable: true })
  patientInstructions: string | null;

  @Column({ type: 'integer', name: 'MinTemp', nullable: true })
  minTemp: number | null;

  @Column({ type: 'integer', name: 'MaxTemp', nullable: true })
  maxTemp: number | null;

  @Column({ type: 'integer', name: 'TempUnit', nullable: true })
  tempUnit: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}