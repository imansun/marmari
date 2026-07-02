import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerSurveyStructureEntity' })
export class LegacyCustomerSurveyStructureEntity {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerSurveyStructureEntityID' })
  customerSurveyStructureEntityID: number;

  @Column({ type: 'bigint', name: 'CustomerSurveyStructureRef' })
  customerSurveyStructureRef: number;

  @Column({ type: 'integer', name: 'RowID' })
  rowID: number;

  @Column({ type: 'bigint', name: 'EntityRef', nullable: true })
  entityRef: number | null;

  @Column({ type: 'bigint', name: 'EntityGroupRef', nullable: true })
  entityGroupRef: number | null;

  @Column({ type: 'boolean', name: 'IsMandatory' })
  isMandatory: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}