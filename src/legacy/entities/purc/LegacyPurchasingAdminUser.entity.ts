import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchasingAdminUser' })
export class LegacyPurchasingAdminUser {
  @PrimaryColumn({ type: 'bigint', name: 'PurchasingAdminUserID' })
  purchasingAdminUserID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

}