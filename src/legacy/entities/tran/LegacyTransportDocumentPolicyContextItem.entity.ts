import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportDocumentPolicyContextItem' })
export class LegacyTransportDocumentPolicyContextItem {
  @PrimaryColumn({ type: 'bigint', name: 'TransportDocumentPolicyContextItemID' })
  transportDocumentPolicyContextItemID: number;

  @Column({ type: 'bigint', name: 'TransportDocumentRef' })
  transportDocumentRef: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}