import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SDCSettlementNature' })
export class LegacySDCSettlementNature {
  @PrimaryColumn({ type: 'bigint', name: 'SDCSettlementNatureID' })
  sDCSettlementNatureID: number;

  @Column({ type: 'bigint', name: 'SituationDocumentConfigurationRef' })
  situationDocumentConfigurationRef: number;

  @Column({ type: 'character varying', name: 'SettlementNatureKey' })
  settlementNatureKey: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}