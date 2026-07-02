import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractTemplateUser' })
export class LegacyContractTemplateUser {
  @PrimaryColumn({ type: 'bigint', name: 'ContractTemplateUserID' })
  contractTemplateUserID: number;

  @Column({ type: 'bigint', name: 'ContractTemplateRef' })
  contractTemplateRef: number;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bigint', name: 'GroupRef', nullable: true })
  groupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}