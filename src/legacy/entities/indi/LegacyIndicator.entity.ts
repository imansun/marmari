import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Indicator' })
export class LegacyIndicator {
  @PrimaryColumn({ type: 'bigint', name: 'IndicatorID' })
  indicatorID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'AdditionalInfo', nullable: true })
  additionalInfo: string | null;

  @Column({ type: 'integer', name: 'InputType', nullable: true })
  inputType: number | null;

  @Column({ type: 'bigint', name: 'CompetencyRef', nullable: true })
  competencyRef: number | null;

  @Column({ type: 'bigint', name: 'StrategicObjectiveItemRef', nullable: true })
  strategicObjectiveItemRef: number | null;

  @Column({ type: 'character varying', name: 'IndicatorGroupItemsMetadata', nullable: true })
  indicatorGroupItemsMetadata: string | null;

  @Column({ type: 'numeric', name: 'Quorum', nullable: true })
  quorum: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsRelatedToIndicatorlessExpectation', default: false })
  isRelatedToIndicatorlessExpectation: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}