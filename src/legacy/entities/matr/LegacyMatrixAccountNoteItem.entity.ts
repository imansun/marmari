import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixAccountNoteItem' })
export class LegacyMatrixAccountNoteItem {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixAccountNoteItemID' })
  matrixAccountNoteItemID: number;

  @Column({ type: 'bigint', name: 'MatrixAccountNoteRef' })
  matrixAccountNoteRef: number;

  @Column({ type: 'bigint', name: 'GLRef', nullable: true })
  gLRef: number | null;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef', nullable: true })
  dLTypeRef: number | null;

  @Column({ type: 'character varying', name: 'DLCode', nullable: true })
  dLCode: string | null;

  @Column({ type: 'integer', name: 'AccountRowType', nullable: true })
  accountRowType: number | null;

  @Column({ type: 'integer', name: 'RowNo' })
  rowNo: number;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount1', nullable: true })
  comparativeAmount1: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount2', nullable: true })
  comparativeAmount2: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount3', nullable: true })
  comparativeAmount3: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount4', nullable: true })
  comparativeAmount4: number | null;

  @Column({ type: 'bigint', name: 'GLDescriptor', nullable: true })
  gLDescriptor: number | null;

  @Column({ type: 'bigint', name: 'SLDescriptor', nullable: true })
  sLDescriptor: number | null;

  @Column({ type: 'character varying', name: 'DL4Descriptor', nullable: true })
  dL4Descriptor: string | null;

  @Column({ type: 'character varying', name: 'DL5Descriptor', nullable: true })
  dL5Descriptor: string | null;

  @Column({ type: 'character varying', name: 'DL6Descriptor', nullable: true })
  dL6Descriptor: string | null;

  @Column({ type: 'character varying', name: 'DL7Descriptor', nullable: true })
  dL7Descriptor: string | null;

  @Column({ type: 'character varying', name: 'DL8Descriptor', nullable: true })
  dL8Descriptor: string | null;

  @Column({ type: 'character varying', name: 'DL9Descriptor', nullable: true })
  dL9Descriptor: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}