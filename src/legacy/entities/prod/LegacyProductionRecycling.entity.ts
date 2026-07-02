import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionRecycling' })
export class LegacyProductionRecycling {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionRecyclingID' })
  productionRecyclingID: number;

  @Column({ type: 'bigint', name: 'ProductionRef' })
  productionRef: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'RecyclableRatio' })
  recyclableRatio: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}