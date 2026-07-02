import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaintenanceExpendituresItemInCalculationArea' })
export class LegacyMaintenanceExpendituresItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'MaintenanceExpendituresItemInCalculationAreaID' })
  maintenanceExpendituresItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'MaintenanceExpendituresItemRef' })
  maintenanceExpendituresItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'DepreciationMethodRef', nullable: true })
  depreciationMethodRef: number | null;

  @Column({ type: 'numeric', name: 'SalvageValue' })
  salvageValue: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}