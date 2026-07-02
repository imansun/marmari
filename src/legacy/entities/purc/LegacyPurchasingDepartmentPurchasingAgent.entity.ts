import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchasingDepartmentPurchasingAgent' })
export class LegacyPurchasingDepartmentPurchasingAgent {
  @PrimaryColumn({ type: 'bigint', name: 'PurchasingDepartmentPurchasingAgentID' })
  purchasingDepartmentPurchasingAgentID: number;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'bigint', name: 'PurchasingAgentRef' })
  purchasingAgentRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}