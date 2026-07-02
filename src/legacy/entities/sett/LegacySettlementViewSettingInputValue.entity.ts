import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementViewSettingInputValue' })
export class LegacySettlementViewSettingInputValue {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementViewSettingInputValueID' })
  settlementViewSettingInputValueID: number;

  @Column({ type: 'bigint', name: 'FactorViewSettingRef' })
  factorViewSettingRef: number;

  @Column({ type: 'character varying', name: 'ReportDescription', nullable: true })
  reportDescription: string | null;

  @Column({ type: 'integer', name: 'ShebaOrAccountNumber', default: 1 })
  shebaOrAccountNumber: number;

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