import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InsuranceAccountConfigurationItem' })
export class LegacyInsuranceAccountConfigurationItem {
  @PrimaryColumn({ type: 'bigint', name: 'InsuranceAccountConfigurationItemID' })
  insuranceAccountConfigurationItemID: number;

  @Column({ type: 'bigint', name: 'InsuranceAccountConfigurationRef' })
  insuranceAccountConfigurationRef: number;

  @Column({ type: 'bigint', name: 'InsuranceTypeRef', nullable: true })
  insuranceTypeRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'integer', name: 'DLLookup4', nullable: true })
  dLLookup4: number | null;

  @Column({ type: 'integer', name: 'DLLookup5', nullable: true })
  dLLookup5: number | null;

  @Column({ type: 'integer', name: 'DLLookup6', nullable: true })
  dLLookup6: number | null;

  @Column({ type: 'integer', name: 'DLLookup7', nullable: true })
  dLLookup7: number | null;

  @Column({ type: 'integer', name: 'DLLookup8', nullable: true })
  dLLookup8: number | null;

  @Column({ type: 'integer', name: 'DLLookup9', nullable: true })
  dLLookup9: number | null;

  @Column({ type: 'integer', name: 'DLLookup10', nullable: true })
  dLLookup10: number | null;

  @Column({ type: 'integer', name: 'DLLookup11', nullable: true })
  dLLookup11: number | null;

  @Column({ type: 'integer', name: 'DLLookup12', nullable: true })
  dLLookup12: number | null;

  @Column({ type: 'integer', name: 'DLLookup13', nullable: true })
  dLLookup13: number | null;

  @Column({ type: 'integer', name: 'DLLookup14', nullable: true })
  dLLookup14: number | null;

  @Column({ type: 'integer', name: 'DLLookup15', nullable: true })
  dLLookup15: number | null;

  @Column({ type: 'integer', name: 'DLLookup16', nullable: true })
  dLLookup16: number | null;

  @Column({ type: 'integer', name: 'DLLookup17', nullable: true })
  dLLookup17: number | null;

  @Column({ type: 'integer', name: 'DLLookup18', nullable: true })
  dLLookup18: number | null;

  @Column({ type: 'integer', name: 'DLLookup19', nullable: true })
  dLLookup19: number | null;

  @Column({ type: 'integer', name: 'DLLookup20', nullable: true })
  dLLookup20: number | null;

  @Column({ type: 'character varying', name: 'DLLevel4', nullable: true })
  dLLevel4: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5', nullable: true })
  dLLevel5: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6', nullable: true })
  dLLevel6: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7', nullable: true })
  dLLevel7: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8', nullable: true })
  dLLevel8: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9', nullable: true })
  dLLevel9: string | null;

  @Column({ type: 'character varying', name: 'DLLevel10', nullable: true })
  dLLevel10: string | null;

  @Column({ type: 'character varying', name: 'DLLevel11', nullable: true })
  dLLevel11: string | null;

  @Column({ type: 'character varying', name: 'DLLevel12', nullable: true })
  dLLevel12: string | null;

  @Column({ type: 'character varying', name: 'DLLevel13', nullable: true })
  dLLevel13: string | null;

  @Column({ type: 'character varying', name: 'DLLevel14', nullable: true })
  dLLevel14: string | null;

  @Column({ type: 'character varying', name: 'DLLevel15', nullable: true })
  dLLevel15: string | null;

  @Column({ type: 'character varying', name: 'DLLevel16', nullable: true })
  dLLevel16: string | null;

  @Column({ type: 'character varying', name: 'DLLevel17', nullable: true })
  dLLevel17: string | null;

  @Column({ type: 'character varying', name: 'DLLevel18', nullable: true })
  dLLevel18: string | null;

  @Column({ type: 'character varying', name: 'DLLevel19', nullable: true })
  dLLevel19: string | null;

  @Column({ type: 'character varying', name: 'DLLevel20', nullable: true })
  dLLevel20: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}