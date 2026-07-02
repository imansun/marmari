import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CourseExpert' })
export class LegacyCourseExpert {
  @PrimaryColumn({ type: 'bigint', name: 'CourseExpertID' })
  courseExpertID: number;

  @Column({ type: 'bigint', name: 'CourseRef' })
  courseRef: number;

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