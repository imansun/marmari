import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReportComplementaryInformationItem' })
export class LegacyOperationalReportComplementaryInformationItem {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReportComplementaryInformationItemID' })
  operationalReportComplementaryInformationItemID: number;

  @Column({ type: 'bigint', name: 'OperationalReportComplementaryInformationRef' })
  operationalReportComplementaryInformationRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitComplementaryInformationItemRef' })
  productionUnitComplementaryInformationItemRef: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}