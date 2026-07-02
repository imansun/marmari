import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConversionDocumentItem' })
export class LegacyConversionDocumentItem {
  @PrimaryColumn({ type: 'bigint', name: 'ConversionDocumentItemID' })
  conversionDocumentItemID: number;

  @Column({ type: 'bigint', name: 'ConversionDocumentRef' })
  conversionDocumentRef: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}