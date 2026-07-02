import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SubcontractingOrderLowerGrade' })
export class LegacySubcontractingOrderLowerGrade {
  @PrimaryColumn({ type: 'bigint', name: 'SubcontractingOrderLowerGradeID' })
  subcontractingOrderLowerGradeID: number;

  @Column({ type: 'bigint', name: 'SubcontractingOrderRef' })
  subcontractingOrderRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}