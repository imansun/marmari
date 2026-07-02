import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceTransferItem' })
export class LegacyServiceTransferItem {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceTransferItemID' })
  serviceTransferItemID: number;

  @Column({ type: 'bigint', name: 'ServiceTransferRef' })
  serviceTransferRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'bigint', name: 'ServiceRef' })
  serviceRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}