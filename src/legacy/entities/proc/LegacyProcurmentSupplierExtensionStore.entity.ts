import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurmentSupplierExtensionStore' })
export class LegacyProcurmentSupplierExtensionStore {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurmentSupplierExtensionStoreID' })
  procurmentSupplierExtensionStoreID: number;

  @Column({ type: 'bigint', name: 'ProcurmentSupplierExtensionRef' })
  procurmentSupplierExtensionRef: number;

  @Column({ type: 'bigint', name: 'SupplierStoreRef' })
  supplierStoreRef: number;

  @Column({ type: 'boolean', name: 'IsDefault', nullable: true })
  isDefault: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}