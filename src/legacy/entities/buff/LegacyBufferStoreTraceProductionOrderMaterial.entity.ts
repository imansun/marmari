import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BufferStoreTraceProductionOrderMaterial' })
export class LegacyBufferStoreTraceProductionOrderMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'BufferStoreTraceProductionOrderMaterialID' })
  bufferStoreTraceProductionOrderMaterialID: number;

  @Column({ type: 'bigint', name: 'BufferStoreTraceRef' })
  bufferStoreTraceRef: number;

  @Column({ type: 'bigint', name: 'ProductionOrderMaterialRef' })
  productionOrderMaterialRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}