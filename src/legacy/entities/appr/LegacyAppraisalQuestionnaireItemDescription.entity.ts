import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalQuestionnaireItemDescription' })
export class LegacyAppraisalQuestionnaireItemDescription {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalQuestionnaireItemDescriptionID' })
  appraisalQuestionnaireItemDescriptionID: number;

  @Column({ type: 'bigint', name: 'AppraisalQuestionnaireItemRef' })
  appraisalQuestionnaireItemRef: number;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'bytea', name: 'FileContent', nullable: true })
  fileContent: Buffer | null;

  @Column({ type: 'character varying', name: 'Text', nullable: true })
  text: string | null;

  @Column({ type: 'boolean', name: 'CreatorIsAdmin' })
  creatorIsAdmin: boolean;

  @Column({ type: 'boolean', name: 'CreatorHasAccessLevel' })
  creatorHasAccessLevel: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}