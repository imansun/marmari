import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerSurveyStructure' })
export class LegacyCustomerSurveyStructure {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerSurveyStructureID' })
  customerSurveyStructureID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'StructureType' })
  structureType: number;

  @Column({ type: 'integer', name: 'StructureSubType', nullable: true })
  structureSubType: number | null;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'bigint', name: 'EntityGroupingRef', nullable: true })
  entityGroupingRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsSentToHandheld' })
  isSentToHandheld: boolean;

}