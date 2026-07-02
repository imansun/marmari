import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AmountControlDefinitionEntityDLType' })
export class LegacyAmountControlDefinitionEntityDLType {
  @PrimaryColumn({ type: 'bigint', name: 'AmountControlDefinitionEntityDLTypeID' })
  amountControlDefinitionEntityDLTypeID: number;

  @Column({ type: 'bigint', name: 'DLTypeRef' })
  dLTypeRef: number;

  @Column({ type: 'bigint', name: 'AmountControlDefinitionEntityRef' })
  amountControlDefinitionEntityRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}