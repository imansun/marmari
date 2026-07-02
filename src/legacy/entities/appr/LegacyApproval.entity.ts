import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Approval' })
export class LegacyApproval {
  @PrimaryColumn({ type: 'bigint', name: 'ApprovalID' })
  approvalID: number;

  @Column({ type: 'bigint', name: 'SupplierRef', nullable: true })
  supplierRef: number | null;

  @Column({ type: 'character varying', name: 'SupplierNationalID', nullable: true })
  supplierNationalID: string | null;

  @Column({ type: 'bigint', name: 'OrderConfirmationRef' })
  orderConfirmationRef: number;

  @Column({ type: 'character varying', name: 'TraceID' })
  traceID: string;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}