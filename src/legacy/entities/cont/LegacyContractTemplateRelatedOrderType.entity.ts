import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractTemplateRelatedOrderType' })
export class LegacyContractTemplateRelatedOrderType {
  @PrimaryColumn({ type: 'bigint', name: 'ContractTemplateRelatedOrderTypeID' })
  contractTemplateRelatedOrderTypeID: number;

  @Column({ type: 'bigint', name: 'ContractTemplateRef' })
  contractTemplateRef: number;

  @Column({ type: 'integer', name: 'ReferenceCode' })
  referenceCode: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}