import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FileStructureRetirementLoan' })
export class LegacyFileStructureRetirementLoan {
  @PrimaryColumn({ type: 'bigint', name: 'FileStructureRetirementLoanID' })
  fileStructureRetirementLoanID: number;

  @Column({ type: 'bigint', name: 'FileStructureRef' })
  fileStructureRef: number;

  @Column({ type: 'bigint', name: 'LoanTypeRef', nullable: true })
  loanTypeRef: number | null;

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