import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoanTypeDL' })
export class LegacyLoanTypeDL {
  @PrimaryColumn({ type: 'bigint', name: 'LoanTypeDLID' })
  loanTypeDLID: number;

  @Column({ type: 'bigint', name: 'LoanTypeRef' })
  loanTypeRef: number;

  @Column({ type: 'character varying', name: 'DLCode', nullable: true })
  dLCode: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}