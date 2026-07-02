import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CostCenterConversionSLVoucherItem' })
export class LegacyCostCenterConversionSLVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'CostCenterConversionSLVoucherItemID' })
  costCenterConversionSLVoucherItemID: number;

  @Column({ type: 'bigint', name: 'CostCenterConversionSLRef' })
  costCenterConversionSLRef: number;

  @Column({ type: 'character varying', name: 'DLLevel4', nullable: true })
  dLLevel4: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5', nullable: true })
  dLLevel5: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6', nullable: true })
  dLLevel6: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7', nullable: true })
  dLLevel7: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8', nullable: true })
  dLLevel8: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9', nullable: true })
  dLLevel9: string | null;

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

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}