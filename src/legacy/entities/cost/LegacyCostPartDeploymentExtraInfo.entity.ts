import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CostPartDeploymentExtraInfo' })
export class LegacyCostPartDeploymentExtraInfo {
  @PrimaryColumn({ type: 'bigint', name: 'CostPartDeploymentExtraInfoID' })
  costPartDeploymentExtraInfoID: number;

  @Column({ type: 'bigint', name: 'CostPartRef' })
  costPartRef: number;

  @Column({ type: 'timestamp without time zone', name: 'LastChangeRateDate', nullable: true })
  lastChangeRateDate: Date | null;

  @Column({ type: 'numeric', name: 'ChangeRateBaseAccumulatedDepreciation', nullable: true })
  changeRateBaseAccumulatedDepreciation: number | null;

  @Column({ type: 'bigint', name: 'RevaluationDepreciationMethodRef', nullable: true })
  revaluationDepreciationMethodRef: number | null;

  @Column({ type: 'numeric', name: 'RevaluationUsefulLife', nullable: true })
  revaluationUsefulLife: number | null;

  @Column({ type: 'numeric', name: 'ChangeRateUsefulLife', nullable: true })
  changeRateUsefulLife: number | null;

  @Column({ type: 'numeric', name: 'UsefulLife', nullable: true })
  usefulLife: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}