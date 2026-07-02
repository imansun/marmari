import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommissionVoucherSpecificationSL' })
export class LegacyCommissionVoucherSpecificationSL {
  @PrimaryColumn({ type: 'bigint', name: 'CommissionVoucherSpecificationSLID' })
  commissionVoucherSpecificationSLID: number;

  @Column({ type: 'bigint', name: 'CommissionVoucherSpecificationRef' })
  commissionVoucherSpecificationRef: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'NatureType' })
  natureType: number;

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

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}