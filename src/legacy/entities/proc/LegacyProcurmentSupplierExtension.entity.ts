import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurmentSupplierExtension' })
export class LegacyProcurmentSupplierExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurmentSupplierExtensionID' })
  procurmentSupplierExtensionID: number;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}