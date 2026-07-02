import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PayableCollateralOtherCost' })
export class LegacyPayableCollateralOtherCost {
  @PrimaryColumn({ type: 'bigint', name: 'PayableCollateralOtherCostID' })
  payableCollateralOtherCostID: number;

  @Column({ type: 'bigint', name: 'PayableCollateralRef' })
  payableCollateralRef: number;

  @Column({ type: 'integer', name: 'DocumentItemType' })
  documentItemType: number;

  @Column({ type: 'bigint', name: 'DocumentItemRef' })
  documentItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}