import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BufferStoreTraceProcurmentOrderExtensionMaterial' })
export class LegacyBufferStoreTraceProcurmentOrderExtensionMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'BufferStoreTraceProcurmentOrderExtensionMaterialID' })
  bufferStoreTraceProcurmentOrderExtensionMaterialID: number;

  @Column({ type: 'bigint', name: 'BufferStoreTraceRef' })
  bufferStoreTraceRef: number;

  @Column({ type: 'bigint', name: 'ProcurmentOrderExtensionMaterialRef' })
  procurmentOrderExtensionMaterialRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}