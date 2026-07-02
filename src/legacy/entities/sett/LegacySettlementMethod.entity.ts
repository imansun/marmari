import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementMethod' })
export class LegacySettlementMethod {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementMethodID' })
  settlementMethodID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'SettlementNatureKey' })
  settlementNatureKey: string;

  @Column({ type: 'boolean', name: 'SystemDefined' })
  systemDefined: boolean;

  @Column({ type: 'boolean', name: 'IsInternal' })
  isInternal: boolean;

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

}