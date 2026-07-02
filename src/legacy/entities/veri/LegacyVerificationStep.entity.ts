import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VerificationStep' })
export class LegacyVerificationStep {
  @PrimaryColumn({ type: 'bigint', name: 'VerificationStepID' })
  verificationStepID: number;

  @Column({ type: 'integer', name: 'Step' })
  step: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'VerifierRef' })
  verifierRef: number;

  @Column({ type: 'integer', name: 'VerifierType' })
  verifierType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PersonRef', nullable: true })
  personRef: number | null;

  @Column({ type: 'bigint', name: 'PositionRef', nullable: true })
  positionRef: number | null;

}