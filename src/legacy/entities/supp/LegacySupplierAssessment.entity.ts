import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SupplierAssessment' })
export class LegacySupplierAssessment {
  @PrimaryColumn({ type: 'bigint', name: 'SupplierAssessmentID' })
  supplierAssessmentID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'character varying', name: 'ReferenceNumber', nullable: true })
  referenceNumber: string | null;

  @Column({ type: 'integer', name: 'Rank', nullable: true })
  rank: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'RegistrationDate', nullable: true })
  registrationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmationDate', nullable: true })
  confirmationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'AssessmentDate' })
  assessmentDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}