import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationTime' })
export class LegacyInspectionConfirmationTime {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationTimeID' })
  inspectionConfirmationTimeID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationRef' })
  inspectionConfirmationRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterPersonnelConfirmerRef', nullable: true })
  workCenterPersonnelConfirmerRef: number | null;

  @Column({ type: 'bigint', name: 'WorkCenterPersonnelAccomplisherRef', nullable: true })
  workCenterPersonnelAccomplisherRef: number | null;

  @Column({ type: 'integer', name: 'StartTime', nullable: true })
  startTime: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}