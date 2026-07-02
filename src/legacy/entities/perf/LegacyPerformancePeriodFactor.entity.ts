import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformancePeriodFactor' })
export class LegacyPerformancePeriodFactor {
  @PrimaryColumn({ type: 'bigint', name: 'PerformancePeriodFactorID' })
  performancePeriodFactorID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Category' })
  category: number;

  @Column({ type: 'integer', name: 'AssignType' })
  assignType: number;

  @Column({ type: 'boolean', name: 'FinalResult' })
  finalResult: boolean;

  @Column({ type: 'boolean', name: 'IsCompensationRelated' })
  isCompensationRelated: boolean;

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