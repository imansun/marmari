import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FailureDetectionMethodTypeMethod' })
export class LegacyFailureDetectionMethodTypeMethod {
  @PrimaryColumn({ type: 'bigint', name: 'FailureDetectionMethodTypeMethodID' })
  failureDetectionMethodTypeMethodID: number;

  @Column({ type: 'bigint', name: 'FailureDetectionMethodTypeRef' })
  failureDetectionMethodTypeRef: number;

  @Column({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'DetectionMethod' })
  detectionMethod: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}