import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StatuteFactor' })
export class LegacyStatuteFactor {
  @PrimaryColumn({ type: 'bigint', name: 'StatuteFactorID' })
  statuteFactorID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'PeriodCode' })
  periodCode: number;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'VisibleInStatute' })
  visibleInStatute: boolean;

  @Column({ type: 'boolean', name: 'VisibleInEmployee' })
  visibleInEmployee: boolean;

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

  @Column({ type: 'integer', name: 'RelatedStatuteTypeCode', default: 1 })
  relatedStatuteTypeCode: number;

}