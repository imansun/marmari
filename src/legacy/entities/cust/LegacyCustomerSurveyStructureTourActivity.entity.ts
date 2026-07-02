import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerSurveyStructureTourActivity' })
export class LegacyCustomerSurveyStructureTourActivity {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerSurveyStructureTourActivityID' })
  customerSurveyStructureTourActivityID: number;

  @Column({ type: 'bigint', name: 'CustomerSurveyStructureRef' })
  customerSurveyStructureRef: number;

  @Column({ type: 'integer', name: 'ActivityTypeRef' })
  activityTypeRef: number;

  @Column({ type: 'boolean', name: 'IsMandatoryInNonScheduledActivity' })
  isMandatoryInNonScheduledActivity: boolean;

  @Column({ type: 'boolean', name: 'IsMandatoryInScheduledActivity' })
  isMandatoryInScheduledActivity: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}