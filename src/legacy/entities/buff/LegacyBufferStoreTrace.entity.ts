import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BufferStoreTrace' })
export class LegacyBufferStoreTrace {
  @PrimaryColumn({ type: 'bigint', name: 'BufferStoreTraceID' })
  bufferStoreTraceID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'BufferStoreRef' })
  bufferStoreRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'numeric', name: 'BufferQuantity' })
  bufferQuantity: number;

  @Column({ type: 'numeric', name: 'UndeliveredReservedQuantity' })
  undeliveredReservedQuantity: number;

  @Column({ type: 'numeric', name: 'UndeliveredNotReservedQuantity' })
  undeliveredNotReservedQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}