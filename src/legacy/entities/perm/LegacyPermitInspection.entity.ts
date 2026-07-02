import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PermitInspection' })
export class LegacyPermitInspection {
  @PrimaryColumn({ type: 'bigint', name: 'PermitInspectionID' })
  permitInspectionID: number;

  @Column({ type: 'bigint', name: 'PermitRef' })
  permitRef: number;

  @Column({ type: 'bigint', name: 'InspectionRef' })
  inspectionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}