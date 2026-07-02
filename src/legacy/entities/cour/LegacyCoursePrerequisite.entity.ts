import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CoursePrerequisite' })
export class LegacyCoursePrerequisite {
  @PrimaryColumn({ type: 'bigint', name: 'CoursePrerequisiteID' })
  coursePrerequisiteID: number;

  @Column({ type: 'bigint', name: 'CourseRef' })
  courseRef: number;

  @Column({ type: 'bigint', name: 'PrerequisiteCourseRef' })
  prerequisiteCourseRef: number;

  @Column({ type: 'integer', name: 'ControlMethodCode' })
  controlMethodCode: number;

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