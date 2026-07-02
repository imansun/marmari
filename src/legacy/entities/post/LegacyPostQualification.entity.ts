import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PostQualification' })
export class LegacyPostQualification {
  @PrimaryColumn({ type: 'bigint', name: 'PostQualificationID' })
  postQualificationID: number;

  @Column({ type: 'bigint', name: 'PostRef' })
  postRef: number;

  @Column({ type: 'integer', name: 'EducationDegreeCode' })
  educationDegreeCode: number;

  @Column({ type: 'integer', name: 'EducationDisciplineCode', nullable: true })
  educationDisciplineCode: number | null;

  @Column({ type: 'integer', name: 'EducationMajorCode', nullable: true })
  educationMajorCode: number | null;

  @Column({ type: 'integer', name: 'EducationNeedLevelCode', nullable: true })
  educationNeedLevelCode: number | null;

  @Column({ type: 'integer', name: 'Experience' })
  experience: number;

  @Column({ type: 'integer', name: 'PassedEducationalHours', nullable: true })
  passedEducationalHours: number | null;

  @Column({ type: 'bigint', name: 'CompetencyRef', nullable: true })
  competencyRef: number | null;

  @Column({ type: 'integer', name: 'CompetencyLevelCode', nullable: true })
  competencyLevelCode: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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