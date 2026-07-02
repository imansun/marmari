import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceAgreement' })
export class LegacyPerformanceAgreement {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceAgreementID' })
  performanceAgreementID: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'AgreementEmployeeRef' })
  agreementEmployeeRef: number;

  @Column({ type: 'bigint', name: 'AgreementManagerRef' })
  agreementManagerRef: number;

  @Column({ type: 'boolean', name: 'IsManagerAgreed', default: false })
  isManagerAgreed: boolean;

  @Column({ type: 'boolean', name: 'IsEmployeeAgreed', default: false })
  isEmployeeAgreed: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PerformancePeriodRef' })
  performancePeriodRef: number;

  @Column({ type: 'bigint', name: 'InitialAgreedEmployeeRef', nullable: true })
  initialAgreedEmployeeRef: number | null;

  @Column({ type: 'bigint', name: 'CompleteAgreedEmployeeRef', nullable: true })
  completeAgreedEmployeeRef: number | null;

}