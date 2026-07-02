import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractTemplateDetailLedgerType' })
export class LegacyContractTemplateDetailLedgerType {
  @PrimaryColumn({ type: 'bigint', name: 'ContractTemplateDetailLedgerTypeID' })
  contractTemplateDetailLedgerTypeID: number;

  @Column({ type: 'bigint', name: 'ContractTemplateDetailLedgerRef' })
  contractTemplateDetailLedgerRef: number;

  @Column({ type: 'bigint', name: 'DetailLedgerType' })
  detailLedgerType: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}