import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchasingDepartmentContract' })
export class LegacyPurchasingDepartmentContract {
  @PrimaryColumn({ type: 'bigint', name: 'PurchasingDepartmentContractID' })
  purchasingDepartmentContractID: number;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}