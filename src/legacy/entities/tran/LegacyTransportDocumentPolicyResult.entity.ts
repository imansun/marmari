import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportDocumentPolicyResult' })
export class LegacyTransportDocumentPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'TransportDocumentPolicyResultID' })
  transportDocumentPolicyResultID: number;

  @Column({ type: 'bigint', name: 'TransportDocumentRef' })
  transportDocumentRef: number;

  @Column({ type: 'integer', name: 'RowIndex' })
  rowIndex: number;

  @Column({ type: 'text', name: 'Value' })
  value: string;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

}