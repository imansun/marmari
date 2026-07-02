import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollateralType' })
export class LegacyCollateralType {
  @PrimaryColumn({ type: 'bigint', name: 'CollateralTypeID' })
  collateralTypeID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'bigint', name: 'CounterPartSLRef' })
  counterPartSLRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'GuaranteeType' })
  guaranteeType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}