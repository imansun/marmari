import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TempCollectionNoticeItemAnalysisInfo' })
export class LegacyTempCollectionNoticeItemAnalysisInfo {
  @PrimaryColumn({ type: 'bigint', name: 'TempCollectionNoticeItemAnalysisInfoID' })
  tempCollectionNoticeItemAnalysisInfoID: number;

  @Column({ type: 'bigint', name: 'CollectionNoticeItemRef' })
  collectionNoticeItemRef: number;

  @Column({ type: 'integer', name: 'ExportDocType' })
  exportDocType: number;

  @Column({ type: 'bigint', name: 'ExportDocRef' })
  exportDocRef: number;

  @Column({ type: 'numeric', name: 'AmountByReceivedCurrency' })
  amountByReceivedCurrency: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}