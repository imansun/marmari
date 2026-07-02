import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDeliveryReturnExtension' })
export class LegacyProcurementDeliveryReturnExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDeliveryReturnExtensionID' })
  procurementDeliveryReturnExtensionID: number;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryReturnRef' })
  procurementDeliveryReturnRef: number;

  @Column({ type: 'bigint', name: 'SupplierStoreRef', nullable: true })
  supplierStoreRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}