import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferenceOperationStandardValue' })
export class LegacyReferenceOperationStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'ReferenceOperationStandardValueID' })
  referenceOperationStandardValueID: number;

  @Column({ type: 'bigint', name: 'ReferenceOperationRef' })
  referenceOperationRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterStandardValueRef' })
  workCenterStandardValueRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}