import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FailureDetectionMethod' })
export class LegacyFailureDetectionMethod {
  @PrimaryColumn({ type: 'bigint', name: 'FailureDetectionMethodID' })
  failureDetectionMethodID: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}