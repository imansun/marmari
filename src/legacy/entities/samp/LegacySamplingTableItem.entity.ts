import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SamplingTableItem' })
export class LegacySamplingTableItem {
  @PrimaryColumn({ type: 'bigint', name: 'SamplingTableItemID' })
  samplingTableItemID: number;

  @Column({ type: 'bigint', name: 'SamplingTableRef' })
  samplingTableRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'LotSize' })
  lotSize: number;

  @Column({ type: 'integer', name: 'SampleSize' })
  sampleSize: number;

  @Column({ type: 'integer', name: 'AcceptanceNumber' })
  acceptanceNumber: number;

  @Column({ type: 'integer', name: 'RejectionNumber' })
  rejectionNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}