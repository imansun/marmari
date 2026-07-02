import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationBaseTableStructure' })
export class LegacyCalculationBaseTableStructure {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationBaseTableStructureID' })
  calculationBaseTableStructureID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'EntityCode1', nullable: true })
  entityCode1: string | null;

  @Column({ type: 'character varying', name: 'EntityCode2', nullable: true })
  entityCode2: string | null;

  @Column({ type: 'character varying', name: 'EntityCode3', nullable: true })
  entityCode3: string | null;

  @Column({ type: 'character varying', name: 'LookupCode1', nullable: true })
  lookupCode1: string | null;

  @Column({ type: 'character varying', name: 'LookupCode2', nullable: true })
  lookupCode2: string | null;

  @Column({ type: 'character varying', name: 'LookupCode3', nullable: true })
  lookupCode3: string | null;

  @Column({ type: 'character varying', name: 'InputTitle1', nullable: true })
  inputTitle1: string | null;

  @Column({ type: 'character varying', name: 'InputTitle2', nullable: true })
  inputTitle2: string | null;

  @Column({ type: 'character varying', name: 'InputTitle3', nullable: true })
  inputTitle3: string | null;

  @Column({ type: 'character varying', name: 'ValueTitle1' })
  valueTitle1: string;

  @Column({ type: 'character varying', name: 'ValueTitle2', nullable: true })
  valueTitle2: string | null;

  @Column({ type: 'character varying', name: 'ValueTitle3', nullable: true })
  valueTitle3: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField1', nullable: true })
  entityTitleField1: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField2', nullable: true })
  entityTitleField2: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField3', nullable: true })
  entityTitleField3: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'EntityCode4', nullable: true })
  entityCode4: string | null;

  @Column({ type: 'character varying', name: 'EntityCode5', nullable: true })
  entityCode5: string | null;

  @Column({ type: 'character varying', name: 'EntityCode6', nullable: true })
  entityCode6: string | null;

  @Column({ type: 'character varying', name: 'EntityCode7', nullable: true })
  entityCode7: string | null;

  @Column({ type: 'character varying', name: 'EntityCode8', nullable: true })
  entityCode8: string | null;

  @Column({ type: 'character varying', name: 'EntityCode9', nullable: true })
  entityCode9: string | null;

  @Column({ type: 'character varying', name: 'EntityCode10', nullable: true })
  entityCode10: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField4', nullable: true })
  entityTitleField4: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField5', nullable: true })
  entityTitleField5: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField6', nullable: true })
  entityTitleField6: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField7', nullable: true })
  entityTitleField7: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField8', nullable: true })
  entityTitleField8: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField9', nullable: true })
  entityTitleField9: string | null;

  @Column({ type: 'character varying', name: 'EntityTitleField10', nullable: true })
  entityTitleField10: string | null;

  @Column({ type: 'character varying', name: 'LookupCode4', nullable: true })
  lookupCode4: string | null;

  @Column({ type: 'character varying', name: 'LookupCode5', nullable: true })
  lookupCode5: string | null;

  @Column({ type: 'character varying', name: 'LookupCode6', nullable: true })
  lookupCode6: string | null;

  @Column({ type: 'character varying', name: 'LookupCode7', nullable: true })
  lookupCode7: string | null;

  @Column({ type: 'character varying', name: 'LookupCode8', nullable: true })
  lookupCode8: string | null;

  @Column({ type: 'character varying', name: 'LookupCode9', nullable: true })
  lookupCode9: string | null;

  @Column({ type: 'character varying', name: 'LookupCode10', nullable: true })
  lookupCode10: string | null;

  @Column({ type: 'character varying', name: 'InputTitle4', nullable: true })
  inputTitle4: string | null;

  @Column({ type: 'character varying', name: 'InputTitle5', nullable: true })
  inputTitle5: string | null;

  @Column({ type: 'character varying', name: 'InputTitle6', nullable: true })
  inputTitle6: string | null;

  @Column({ type: 'character varying', name: 'InputTitle7', nullable: true })
  inputTitle7: string | null;

  @Column({ type: 'character varying', name: 'InputTitle8', nullable: true })
  inputTitle8: string | null;

  @Column({ type: 'character varying', name: 'InputTitle9', nullable: true })
  inputTitle9: string | null;

  @Column({ type: 'character varying', name: 'InputTitle10', nullable: true })
  inputTitle10: string | null;

  @Column({ type: 'character varying', name: 'ValueTitle4', nullable: true })
  valueTitle4: string | null;

  @Column({ type: 'character varying', name: 'ValueTitle5', nullable: true })
  valueTitle5: string | null;

  @Column({ type: 'character varying', name: 'ValueTitle6', nullable: true })
  valueTitle6: string | null;

  @Column({ type: 'character varying', name: 'ValueTitle7', nullable: true })
  valueTitle7: string | null;

  @Column({ type: 'character varying', name: 'ValueTitle8', nullable: true })
  valueTitle8: string | null;

  @Column({ type: 'character varying', name: 'ValueTitle9', nullable: true })
  valueTitle9: string | null;

  @Column({ type: 'character varying', name: 'ValueTitle10', nullable: true })
  valueTitle10: string | null;

}