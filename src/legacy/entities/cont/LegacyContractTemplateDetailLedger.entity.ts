import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractTemplateDetailLedger' })
export class LegacyContractTemplateDetailLedger {
  @PrimaryColumn({ type: 'bigint', name: 'ContractTemplateDetailLedgerID' })
  contractTemplateDetailLedgerID: number;

  @Column({ type: 'bigint', name: 'ContractTemplateRef' })
  contractTemplateRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Position' })
  position: number;

  @Column({ type: 'boolean', name: 'VisibleInItem' })
  visibleInItem: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}