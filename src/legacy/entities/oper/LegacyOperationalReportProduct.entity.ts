import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReportProduct' })
export class LegacyOperationalReportProduct {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReportProductID' })
  operationalReportProductID: number;

  @Column({ type: 'bigint', name: 'OperationalReportRef' })
  operationalReportRef: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'numeric', name: 'ProductionQty', nullable: true })
  productionQty: number | null;

  @Column({ type: 'numeric', name: 'FinalProductionQty', nullable: true })
  finalProductionQty: number | null;

  @Column({ type: 'bigint', name: 'MassPartUnitRef' })
  massPartUnitRef: number;

  @Column({ type: 'numeric', name: 'PlanQty', nullable: true })
  planQty: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}