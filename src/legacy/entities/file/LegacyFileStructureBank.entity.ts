import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FileStructureBank' })
export class LegacyFileStructureBank {
  @PrimaryColumn({ type: 'bigint', name: 'FileStructureBankID' })
  fileStructureBankID: number;

  @Column({ type: 'bigint', name: 'FileStructureRef' })
  fileStructureRef: number;

  @Column({ type: 'bigint', name: 'BankRef' })
  bankRef: number;

  @Column({ type: 'bigint', name: 'BankBranchRef', nullable: true })
  bankBranchRef: number | null;

  @Column({ type: 'bigint', name: 'BankAccountTypeRef', nullable: true })
  bankAccountTypeRef: number | null;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

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