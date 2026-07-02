import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommissionVoucher' })
export class LegacyCommissionVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'CommissionVoucherID' })
  commissionVoucherID: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'bigint', name: 'CommissionVoucherSpecificationRef' })
  commissionVoucherSpecificationRef: number;

  @Column({ type: 'bigint', name: 'CalculationPeriodRef' })
  calculationPeriodRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}