import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SignatureAssignment' })
export class LegacySignatureAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'SignatureAssignmentID' })
  signatureAssignmentID: number;

  @Column({ type: 'bigint', name: 'SignatureRequestRef' })
  signatureRequestRef: number;

  @Column({ type: 'bigint', name: 'SignatoryRef' })
  signatoryRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ActDate', nullable: true })
  actDate: Date | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}