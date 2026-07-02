import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionJointProductRatio' })
export class LegacyProductionJointProductRatio {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionJointProductRatioID' })
  productionJointProductRatioID: number;

  @Column({ type: 'bigint', name: 'ProductionRef' })
  productionRef: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'double precision', name: 'UnifiedProductionRatio' })
  unifiedProductionRatio: string;

  @Column({ type: 'numeric', name: 'ProportionalSalePrice' })
  proportionalSalePrice: number;

  @Column({ type: 'numeric', name: 'ProductionQuantity' })
  productionQuantity: number;

  @Column({ type: 'numeric', name: 'ShareRatio' })
  shareRatio: number;

  @Column({ type: 'boolean', name: 'IsByProduct' })
  isByProduct: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'JointProductType' })
  jointProductType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}