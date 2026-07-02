import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurmentOrderExtension' })
export class LegacyProcurmentOrderExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurmentOrderExtensionID' })
  procurmentOrderExtensionID: number;

  @Column({ type: 'bigint', name: 'ProcurmentOrderRef' })
  procurmentOrderRef: number;

  @Column({ type: 'bigint', name: 'SupplierStoreRef', nullable: true })
  supplierStoreRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

}