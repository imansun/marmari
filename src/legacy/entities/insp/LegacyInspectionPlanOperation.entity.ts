import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPlanOperation' })
export class LegacyInspectionPlanOperation {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPlanOperationID' })
  inspectionPlanOperationID: number;

  @Column({ type: 'bigint', name: 'InspectionPlanRef' })
  inspectionPlanRef: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'integer', name: 'InspectionLevel', nullable: true })
  inspectionLevel: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'InspectionPointRef', nullable: true })
  inspectionPointRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}