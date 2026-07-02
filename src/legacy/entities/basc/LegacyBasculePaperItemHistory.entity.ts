import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BasculePaperItemHistory' })
export class LegacyBasculePaperItemHistory {
  @PrimaryColumn({ type: 'bigint', name: 'BasculePaperItemHistoryID' })
  basculePaperItemHistoryID: number;

  @Column({ type: 'bigint', name: 'BasculePaperItemRef' })
  basculePaperItemRef: number;

  @Column({ type: 'numeric', name: 'FirstMeasure' })
  firstMeasure: number;

  @Column({ type: 'numeric', name: 'SecondMeasure', nullable: true })
  secondMeasure: number | null;

  @Column({ type: 'integer', name: 'EnterTypeFirstMeasure', nullable: true })
  enterTypeFirstMeasure: number | null;

  @Column({ type: 'integer', name: 'EnterTypeSecondMeasure', nullable: true })
  enterTypeSecondMeasure: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}