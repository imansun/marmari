import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalQuestionnaireItemHistory' })
export class LegacyAppraisalQuestionnaireItemHistory {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalQuestionnaireItemHistoryID' })
  appraisalQuestionnaireItemHistoryID: number;

  @Column({ type: 'bigint', name: 'AppraisalQuestionnaireItemRef' })
  appraisalQuestionnaireItemRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ChangeDate' })
  changeDate: Date;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}