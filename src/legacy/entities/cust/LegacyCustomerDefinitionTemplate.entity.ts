import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerDefinitionTemplate' })
export class LegacyCustomerDefinitionTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerDefinitionTemplateID' })
  customerDefinitionTemplateID: number;

  @Column({ type: 'boolean', name: 'DefaultZoneBasedOnRetailShop' })
  defaultZoneBasedOnRetailShop: boolean;

  @Column({ type: 'bigint', name: 'DefaultCustomerGroupingRef', nullable: true })
  defaultCustomerGroupingRef: number | null;

  @Column({ type: 'bigint', name: 'DefaultCustomerGroupRef', nullable: true })
  defaultCustomerGroupRef: number | null;

  @Column({ type: 'bigint', name: 'DefaultLoyaltyMemberPatternRef', nullable: true })
  defaultLoyaltyMemberPatternRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'DefaultCustomerAutomaticLoyaltyMembership' })
  defaultCustomerAutomaticLoyaltyMembership: boolean;

  @Column({ type: 'boolean', name: 'AuthenticateWithMobile', default: false })
  authenticateWithMobile: boolean;

  @Column({ type: 'character varying', name: 'DefaultFirstName', nullable: true })
  defaultFirstName: string | null;

  @Column({ type: 'character varying', name: 'DefaultLastName', nullable: true })
  defaultLastName: string | null;

  @Column({ type: 'character varying', name: 'DefaultAddressTitle', nullable: true })
  defaultAddressTitle: string | null;

  @Column({ type: 'boolean', name: 'FillFirstNameWithCellPhone', default: false })
  fillFirstNameWithCellPhone: boolean;

  @Column({ type: 'boolean', name: 'FillLastNameWithCellPhone', default: false })
  fillLastNameWithCellPhone: boolean;

  @Column({ type: 'character varying', name: 'OfflineMatchingKeysJson' })
  offlineMatchingKeysJson: string;

}