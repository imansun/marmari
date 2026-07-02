import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderBaseInfo' })
export class LegacyProductionOrderBaseInfo {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderBaseInfoID' })
  productionOrderBaseInfoID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderRef' })
  productionOrderRef: number;

  @Column({ type: 'bigint', name: 'BaseProductionOrderComponentRef' })
  baseProductionOrderComponentRef: number;

  @Column({ type: 'bigint', name: 'BaseProductionOrderBaseInfoRef', nullable: true })
  baseProductionOrderBaseInfoRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}