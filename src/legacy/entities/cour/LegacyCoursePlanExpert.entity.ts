import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CoursePlanExpert' })
export class LegacyCoursePlanExpert {
  @PrimaryColumn({ type: 'bigint', name: 'CoursePlanExpertID' })
  coursePlanExpertID: number;

  @Column({ type: 'bigint', name: 'CoursePlanRef' })
  coursePlanRef: number;

  @Column({ type: 'integer', name: 'ExpertTypeCode' })
  expertTypeCode: number;

  @Column({ type: 'bigint', name: 'PersonRef' })
  personRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}