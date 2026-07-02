import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UserPurchaseType' })
export class LegacyUserPurchaseType {
  @PrimaryColumn({ type: 'bigint', name: 'UserPurchaseTypeID' })
  userPurchaseTypeID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'PurchaseType' })
  purchaseType: number;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}