import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReportUtilityService' })
export class LegacyOperationalReportUtilityService {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReportUtilityServiceID' })
  operationalReportUtilityServiceID: number;

  @Column({ type: 'bigint', name: 'OperationalReportRef' })
  operationalReportRef: number;

  @Column({ type: 'bigint', name: 'UtilityServiceRef' })
  utilityServiceRef: number;

  @Column({ type: 'numeric', name: 'ConsumptionQty', nullable: true })
  consumptionQty: number | null;

  @Column({ type: 'numeric', name: 'FinalConsumptionQty', nullable: true })
  finalConsumptionQty: number | null;

  @Column({ type: 'bigint', name: 'MassUnitRef' })
  massUnitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}