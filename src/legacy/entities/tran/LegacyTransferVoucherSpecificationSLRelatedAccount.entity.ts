import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransferVoucherSpecificationSLRelatedAccount' })
export class LegacyTransferVoucherSpecificationSLRelatedAccount {
  @PrimaryColumn({ type: 'bigint', name: 'TransferVoucherSpecificationSLRelatedAccountID' })
  transferVoucherSpecificationSLRelatedAccountID: number;

  @Column({ type: 'bigint', name: 'TransferVoucherSpecificationSLRef' })
  transferVoucherSpecificationSLRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'bigint', name: 'DLTypeRef4', nullable: true })
  dLTypeRef4: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef5', nullable: true })
  dLTypeRef5: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef6', nullable: true })
  dLTypeRef6: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef7', nullable: true })
  dLTypeRef7: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef8', nullable: true })
  dLTypeRef8: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef9', nullable: true })
  dLTypeRef9: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef10', nullable: true })
  dLTypeRef10: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef11', nullable: true })
  dLTypeRef11: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef12', nullable: true })
  dLTypeRef12: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef13', nullable: true })
  dLTypeRef13: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef14', nullable: true })
  dLTypeRef14: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef15', nullable: true })
  dLTypeRef15: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef16', nullable: true })
  dLTypeRef16: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef17', nullable: true })
  dLTypeRef17: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef18', nullable: true })
  dLTypeRef18: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef19', nullable: true })
  dLTypeRef19: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef20', nullable: true })
  dLTypeRef20: number | null;

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