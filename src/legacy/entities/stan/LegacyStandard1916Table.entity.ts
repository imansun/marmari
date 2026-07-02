import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Standard1916Table' })
export class LegacyStandard1916Table {
  @PrimaryColumn({ type: 'bigint', name: 'Standard1916TableID' })
  standard1916TableID: number;

  @Column({ type: 'integer', name: 'VerificationLevel' })
  verificationLevel: number;

  @Column({ type: 'integer', name: 'LowerLotSize', nullable: true })
  lowerLotSize: number | null;

  @Column({ type: 'integer', name: 'UpperLotSize', nullable: true })
  upperLotSize: number | null;

  @Column({ type: 'integer', name: 'SamplingPlan' })
  samplingPlan: number;

  @Column({ type: 'integer', name: 'CodeLetter' })
  codeLetter: number;

  @Column({ type: 'integer', name: 'SampleSize' })
  sampleSize: number;

  @Column({ type: 'numeric', name: 'KValue', nullable: true })
  kValue: number | null;

  @Column({ type: 'numeric', name: 'FValue', nullable: true })
  fValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}