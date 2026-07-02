import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeTrainingCourse' })
export class LegacyEmployeeTrainingCourse {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeTrainingCourseID' })
  employeeTrainingCourseID: number;

  @Column({ type: 'bigint', name: 'EmployeeTrainingRef' })
  employeeTrainingRef: number;

  @Column({ type: 'bigint', name: 'CourseRef' })
  courseRef: number;

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