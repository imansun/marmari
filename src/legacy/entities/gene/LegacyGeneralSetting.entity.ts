import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GeneralSetting' })
export class LegacyGeneralSetting {
  @PrimaryColumn({ type: 'bigint', name: 'GeneralSettingID' })
  generalSettingID: number;

  @Column({ type: 'character varying', name: 'FixedEndingExpression', nullable: true })
  fixedEndingExpression: string | null;

  @Column({ type: 'boolean', name: 'ShowNoteColumn' })
  showNoteColumn: boolean;

  @Column({ type: 'integer', name: 'HeaderTextAlign' })
  headerTextAlign: number;

  @Column({ type: 'integer', name: 'ReportTextAlign' })
  reportTextAlign: number;

  @Column({ type: 'integer', name: 'FixedEndingExpressionTextAlign' })
  fixedEndingExpressionTextAlign: number;

  @Column({ type: 'integer', name: 'HeaderDescriptionTextAlign' })
  headerDescriptionTextAlign: number;

  @Column({ type: 'integer', name: 'FooterDescriptionTextAlign' })
  footerDescriptionTextAlign: number;

  @Column({ type: 'integer', name: 'NoteTitleTextAlign' })
  noteTitleTextAlign: number;

  @Column({ type: 'boolean', name: 'ShowNotesOnSeperatedPages' })
  showNotesOnSeperatedPages: boolean;

  @Column({ type: 'boolean', name: 'ApplyNoteGrouping' })
  applyNoteGrouping: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}