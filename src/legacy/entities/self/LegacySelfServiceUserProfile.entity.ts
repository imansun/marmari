import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceUserProfile' })
export class LegacySelfServiceUserProfile {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceUserProfileID' })
  selfServiceUserProfileID: number;

  @Column({ type: 'bigint', name: 'SelfServiceUserRef' })
  selfServiceUserRef: number;

  @Column({ type: 'integer', name: 'ListPageSize', nullable: true })
  listPageSize: number | null;

  @Column({ type: 'boolean', name: 'AlwaysShowPurchaseManual' })
  alwaysShowPurchaseManual: boolean;

  @Column({ type: 'integer', name: 'PurchasePageLayout' })
  purchasePageLayout: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}