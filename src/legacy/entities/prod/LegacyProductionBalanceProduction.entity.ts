import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionBalanceProduction' })
export class LegacyProductionBalanceProduction {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionBalanceProductionID' })
  productionBalanceProductionID: number;

  @Column({ type: 'bigint', name: 'ProductionBalanceRef' })
  productionBalanceRef: number;

  @Column({ type: 'bigint', name: 'OperationalReportProductRef' })
  operationalReportProductRef: number;

  @Column({ type: 'numeric', name: 'EditedQty', nullable: true })
  editedQty: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}