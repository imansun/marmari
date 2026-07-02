import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BufferStoreTracePartRequest' })
export class LegacyBufferStoreTracePartRequest {
  @PrimaryColumn({ type: 'bigint', name: 'BufferStoreTracePartRequestID' })
  bufferStoreTracePartRequestID: number;

  @Column({ type: 'bigint', name: 'BufferStoreTraceRef' })
  bufferStoreTraceRef: number;

  @Column({ type: 'bigint', name: 'PartRequestRef' })
  partRequestRef: number;

  @Column({ type: 'bigint', name: 'PartRequestItemRef' })
  partRequestItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}