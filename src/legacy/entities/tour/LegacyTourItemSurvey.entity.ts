import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourItemSurvey' })
export class LegacyTourItemSurvey {
  @PrimaryColumn({ type: 'bigint', name: 'TourItemSurveyID' })
  tourItemSurveyID: number;

  @Column({ type: 'bigint', name: 'CustomerSurveyStructureRef' })
  customerSurveyStructureRef: number;

  @Column({ type: 'bigint', name: 'TourItemRef' })
  tourItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'RegisterDateTime', nullable: true })
  registerDateTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'AskDate', nullable: true })
  askDate: Date | null;

  @Column({ type: 'character varying', name: 'Latitude', nullable: true })
  latitude: string | null;

  @Column({ type: 'character varying', name: 'Longitude', nullable: true })
  longitude: string | null;

  @Column({ type: 'integer', name: 'Provider', nullable: true })
  provider: number | null;

  @Column({ type: 'numeric', name: 'Accuracy', nullable: true })
  accuracy: number | null;

  @Column({ type: 'timestamp without time zone', name: 'OperationDate', nullable: true })
  operationDate: Date | null;

  @Column({ type: 'boolean', name: 'IsAutomatic' })
  isAutomatic: boolean;

  @Column({ type: 'bigint', name: 'UnexecutedActivityReasonRef', nullable: true })
  unexecutedActivityReasonRef: number | null;

  @Column({ type: 'character varying', name: 'UnexecutedActivityReasonDescription', nullable: true })
  unexecutedActivityReasonDescription: string | null;

  @Column({ type: 'boolean', name: 'IsSurveyNonscheduled' })
  isSurveyNonscheduled: boolean;

  @Column({ type: 'boolean', name: 'SentFromHandheld' })
  sentFromHandheld: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}