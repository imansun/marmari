import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LotSizingSetting' })
export class LegacyLotSizingSetting {
  @PrimaryColumn({ type: 'bigint', name: 'LotSizingSettingID' })
  lotSizingSettingID: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'integer', name: 'MRPType' })
  mRPType: number;

  @Column({ type: 'integer', name: 'LotSizeProcedure', nullable: true })
  lotSizeProcedure: number | null;

  @Column({ type: 'bigint', name: 'PartUnitRef', nullable: true })
  partUnitRef: number | null;

  @Column({ type: 'numeric', name: 'MinimumLotSizing', nullable: true })
  minimumLotSizing: number | null;

  @Column({ type: 'numeric', name: 'MaximumLotSizing', nullable: true })
  maximumLotSizing: number | null;

  @Column({ type: 'numeric', name: 'FixedLotSizing', nullable: true })
  fixedLotSizing: number | null;

  @Column({ type: 'integer', name: 'PeriodCalculationType', nullable: true })
  periodCalculationType: number | null;

  @Column({ type: 'integer', name: 'PeriodValue', nullable: true })
  periodValue: number | null;

  @Column({ type: 'numeric', name: 'MaximumStockLevel', nullable: true })
  maximumStockLevel: number | null;

  @Column({ type: 'numeric', name: 'RoundingValue', nullable: true })
  roundingValue: number | null;

  @Column({ type: 'integer', name: 'TimeFence', nullable: true })
  timeFence: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}