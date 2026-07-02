import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransposePatternItem' })
export class LegacyTransposePatternItem {
  @PrimaryColumn({ type: 'bigint', name: 'TransposePatternItemID' })
  transposePatternItemID: number;

  @Column({ type: 'bigint', name: 'TransposePatternRef' })
  transposePatternRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'TransposePatternFundCategory' })
  transposePatternFundCategory: number;

  @Column({ type: 'bigint', name: 'SourceDLRef1', nullable: true })
  sourceDLRef1: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef2', nullable: true })
  sourceDLRef2: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef3', nullable: true })
  sourceDLRef3: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef4', nullable: true })
  sourceDLRef4: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef5', nullable: true })
  sourceDLRef5: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef6', nullable: true })
  sourceDLRef6: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef7', nullable: true })
  sourceDLRef7: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef8', nullable: true })
  sourceDLRef8: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef9', nullable: true })
  sourceDLRef9: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef10', nullable: true })
  sourceDLRef10: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef11', nullable: true })
  sourceDLRef11: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef12', nullable: true })
  sourceDLRef12: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef13', nullable: true })
  sourceDLRef13: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef14', nullable: true })
  sourceDLRef14: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef15', nullable: true })
  sourceDLRef15: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef16', nullable: true })
  sourceDLRef16: number | null;

  @Column({ type: 'bigint', name: 'SourceDLRef17', nullable: true })
  sourceDLRef17: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef1', nullable: true })
  destinationDLRef1: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef2', nullable: true })
  destinationDLRef2: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef3', nullable: true })
  destinationDLRef3: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef4', nullable: true })
  destinationDLRef4: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef5', nullable: true })
  destinationDLRef5: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef6', nullable: true })
  destinationDLRef6: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef7', nullable: true })
  destinationDLRef7: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef8', nullable: true })
  destinationDLRef8: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef9', nullable: true })
  destinationDLRef9: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef10', nullable: true })
  destinationDLRef10: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef11', nullable: true })
  destinationDLRef11: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef12', nullable: true })
  destinationDLRef12: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef13', nullable: true })
  destinationDLRef13: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef14', nullable: true })
  destinationDLRef14: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef15', nullable: true })
  destinationDLRef15: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef16', nullable: true })
  destinationDLRef16: number | null;

  @Column({ type: 'bigint', name: 'DestinationDLRef17', nullable: true })
  destinationDLRef17: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}