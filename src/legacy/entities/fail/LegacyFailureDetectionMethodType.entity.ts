import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FailureDetectionMethodType' })
export class LegacyFailureDetectionMethodType {
  @PrimaryColumn({ type: 'bigint', name: 'FailureDetectionMethodTypeID' })
  failureDetectionMethodTypeID: number;

  @Column({ type: 'bigint', name: 'FailureDetectionMethodRef' })
  failureDetectionMethodRef: number;

  @Column({ type: 'integer', name: 'DetectionMethodType' })
  detectionMethodType: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}