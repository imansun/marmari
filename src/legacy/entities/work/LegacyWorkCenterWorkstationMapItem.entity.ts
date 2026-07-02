import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterWorkstationMapItem' })
export class LegacyWorkCenterWorkstationMapItem {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterWorkstationMapItemID' })
  workCenterWorkstationMapItemID: number;

  @Column({ type: 'bigint', name: 'WorkCenterWorkstationMapRef' })
  workCenterWorkstationMapRef: number;

  @Column({ type: 'bigint', name: 'StandardValueRef' })
  standardValueRef: number;

  @Column({ type: 'integer', name: 'ConversionSLType', nullable: true })
  conversionSLType: number | null;

  @Column({ type: 'numeric', name: 'ConversionRatio' })
  conversionRatio: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}