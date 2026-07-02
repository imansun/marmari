import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndicatorHistory' })
export class LegacyIndicatorHistory {
  @PrimaryColumn({ type: 'bigint', name: 'IndicatorHistoryID' })
  indicatorHistoryID: number;

  @Column({ type: 'bigint', name: 'IndicatorRef' })
  indicatorRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'AdditionalInfo', nullable: true })
  additionalInfo: string | null;

  @Column({ type: 'bigint', name: 'CompetencyRef', nullable: true })
  competencyRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'StrategicObjectiveItemRef', nullable: true })
  strategicObjectiveItemRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}