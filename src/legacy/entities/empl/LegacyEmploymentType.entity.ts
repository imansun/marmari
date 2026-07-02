import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmploymentType' })
export class LegacyEmploymentType {
  @PrimaryColumn({ type: 'bigint', name: 'EmploymentTypeID' })
  employmentTypeID: number;

  @Column({ type: 'character varying', name: 'RawTitle' })
  rawTitle: string;

  @Column({ type: 'integer', name: 'WageSystemTypeCode', nullable: true })
  wageSystemTypeCode: number | null;

  @Column({ type: 'integer', name: 'Nature', nullable: true })
  nature: number | null;

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

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

}