import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerSurveyStructureFieldSpec' })
export class LegacyCustomerSurveyStructureFieldSpec {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerSurveyStructureFieldSpecID' })
  customerSurveyStructureFieldSpecID: number;

  @Column({ type: 'bigint', name: 'CustomerSurveyStructureRef' })
  customerSurveyStructureRef: number;

  @Column({ type: 'integer', name: 'RowID' })
  rowID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsMandatory' })
  isMandatory: boolean;

  @Column({ type: 'character varying', name: 'LookupType', nullable: true })
  lookupType: string | null;

  @Column({ type: 'integer', name: 'PicSize', nullable: true })
  picSize: number | null;

  @Column({ type: 'boolean', name: 'UnitBased' })
  unitBased: boolean;

  @Column({ type: 'boolean', name: 'UseEntityUnits', nullable: true })
  useEntityUnits: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}