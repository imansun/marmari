import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrganizationBranch' })
export class LegacyOrganizationBranch {
  @PrimaryColumn({ type: 'bigint', name: 'OrganizationBranchID' })
  organizationBranchID: number;

  @Column({ type: 'bigint', name: 'OrganizationRef' })
  organizationRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'boolean', name: 'ContainsEmployerExemption' })
  containsEmployerExemption: boolean;

  @Column({ type: 'integer', name: 'ExemptionQuantity', nullable: true })
  exemptionQuantity: number | null;

  @Column({ type: 'boolean', name: 'IsInsuranceContractCodeAware' })
  isInsuranceContractCodeAware: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}