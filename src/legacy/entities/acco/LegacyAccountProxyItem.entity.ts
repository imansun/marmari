import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountProxyItem' })
export class LegacyAccountProxyItem {
  @PrimaryColumn({ type: 'bigint', name: 'AccountProxyItemID' })
  accountProxyItemID: number;

  @Column({ type: 'bigint', name: 'AccountProxyRef' })
  accountProxyRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'ConditionSelection', nullable: true })
  conditionSelection: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}