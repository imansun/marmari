import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReportProductVarianceReason' })
export class LegacyOperationalReportProductVarianceReason {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReportProductVarianceReasonID' })
  operationalReportProductVarianceReasonID: number;

  @Column({ type: 'bigint', name: 'OperationalReportProductRef' })
  operationalReportProductRef: number;

  @Column({ type: 'bigint', name: 'VarianceReasonGroupRef' })
  varianceReasonGroupRef: number;

  @Column({ type: 'character varying', name: 'ProductionVarianceReason', nullable: true })
  productionVarianceReason: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}