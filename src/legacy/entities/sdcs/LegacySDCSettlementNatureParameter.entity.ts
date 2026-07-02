import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SDCSettlementNatureParameter' })
export class LegacySDCSettlementNatureParameter {
  @PrimaryColumn({ type: 'bigint', name: 'SDCSettlementNatureParameterID' })
  sDCSettlementNatureParameterID: number;

  @Column({ type: 'bigint', name: 'SDCSettlementNatureRef' })
  sDCSettlementNatureRef: number;

  @Column({ type: 'character varying', name: 'ParameterKey' })
  parameterKey: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}