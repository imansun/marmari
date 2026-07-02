import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesDocumentItemQuantityAdjustment' })
export class LegacySalesDocumentItemQuantityAdjustment {
  @PrimaryColumn({ type: 'bigint', name: 'SalesDocumentItemQuantityAdjustmentID' })
  salesDocumentItemQuantityAdjustmentID: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'bigint', name: 'DocumentItemRef' })
  documentItemRef: number;

  @Column({ type: 'numeric', name: 'OldQuantity' })
  oldQuantity: number;

  @Column({ type: 'numeric', name: 'NewQuantity' })
  newQuantity: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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