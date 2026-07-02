import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementSession' })
export class LegacySettlementSession {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementSessionID' })
  settlementSessionID: number;

  @Column({ type: 'bigint', name: 'SettlementRef' })
  settlementRef: number;

  @Column({ type: 'bigint', name: 'SessionRef' })
  sessionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}