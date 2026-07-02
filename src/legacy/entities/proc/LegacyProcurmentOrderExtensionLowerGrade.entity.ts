import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurmentOrderExtensionLowerGrade' })
export class LegacyProcurmentOrderExtensionLowerGrade {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurmentOrderExtensionLowerGradeID' })
  procurmentOrderExtensionLowerGradeID: number;

  @Column({ type: 'bigint', name: 'ProcurmentOrderExtensionItemRef' })
  procurmentOrderExtensionItemRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}