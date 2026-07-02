import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldVoucherReferenceAssignment' })
export class LegacyHandheldVoucherReferenceAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldVoucherReferenceAssignmentID' })
  handheldVoucherReferenceAssignmentID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'Receiver' })
  receiver: number;

  @Column({ type: 'timestamp without time zone', name: 'SendDate' })
  sendDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReceiveDate', nullable: true })
  receiveDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'RemoveDate', nullable: true })
  removeDate: Date | null;

  @Column({ type: 'integer', name: 'ReferenceAssignmentState' })
  referenceAssignmentState: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'TransferMethod' })
  transferMethod: number;

}