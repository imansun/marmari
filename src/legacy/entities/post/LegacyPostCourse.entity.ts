import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PostCourse' })
export class LegacyPostCourse {
  @PrimaryColumn({ type: 'bigint', name: 'PostCourseID' })
  postCourseID: number;

  @Column({ type: 'bigint', name: 'CourseRef' })
  courseRef: number;

  @Column({ type: 'bigint', name: 'PostRef' })
  postRef: number;

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