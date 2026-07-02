import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VATStatement' })
export class LegacyVATStatement {
  @PrimaryColumn({ type: 'bigint', name: 'VATStatementID' })
  vATStatementID: number;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'TaxYearRef' })
  taxYearRef: number;

  @Column({ type: 'bigint', name: 'VATBaseInformationRef' })
  vATBaseInformationRef: number;

  @Column({ type: 'bigint', name: 'Approver', nullable: true })
  approver: number | null;

  @Column({ type: 'bigint', name: 'Finalizer', nullable: true })
  finalizer: number | null;

  @Column({ type: 'boolean', name: 'RefundRequest' })
  refundRequest: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}