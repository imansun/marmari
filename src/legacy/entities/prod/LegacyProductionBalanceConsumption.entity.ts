import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionBalanceConsumption' })
export class LegacyProductionBalanceConsumption {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionBalanceConsumptionID' })
  productionBalanceConsumptionID: number;

  @Column({ type: 'bigint', name: 'ProductionBalanceRef' })
  productionBalanceRef: number;

  @Column({ type: 'bigint', name: 'OperationalReportFeedRef' })
  operationalReportFeedRef: number;

  @Column({ type: 'numeric', name: 'EditedQty', nullable: true })
  editedQty: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}