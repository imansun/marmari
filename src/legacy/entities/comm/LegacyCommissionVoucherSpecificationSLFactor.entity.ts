import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommissionVoucherSpecificationSLFactor' })
export class LegacyCommissionVoucherSpecificationSLFactor {
  @PrimaryColumn({ type: 'bigint', name: 'CommissionVoucherSpecificationSLFactorID' })
  commissionVoucherSpecificationSLFactorID: number;

  @Column({ type: 'bigint', name: 'CommissionVoucherSpecificationSLRef' })
  commissionVoucherSpecificationSLRef: number;

  @Column({ type: 'bigint', name: 'CommissionFactorRef' })
  commissionFactorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}