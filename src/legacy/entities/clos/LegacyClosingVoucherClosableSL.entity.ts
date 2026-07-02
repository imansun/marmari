import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ClosingVoucherClosableSL' })
export class LegacyClosingVoucherClosableSL {
  @PrimaryColumn({ type: 'bigint', name: 'ClosingVoucherClosableSLID' })
  closingVoucherClosableSLID: number;

  @Column({ type: 'bigint', name: 'ClosingVoucherCounterPartSLRef' })
  closingVoucherCounterPartSLRef: number;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'character varying', name: 'SLCode', nullable: true })
  sLCode: string | null;

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

  @Column({ type: 'bigint', name: 'DLTypeRef4', nullable: true })
  dLTypeRef4: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef5', nullable: true })
  dLTypeRef5: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef6', nullable: true })
  dLTypeRef6: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef7', nullable: true })
  dLTypeRef7: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef8', nullable: true })
  dLTypeRef8: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef9', nullable: true })
  dLTypeRef9: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef10', nullable: true })
  dLTypeRef10: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef11', nullable: true })
  dLTypeRef11: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef12', nullable: true })
  dLTypeRef12: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef13', nullable: true })
  dLTypeRef13: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef14', nullable: true })
  dLTypeRef14: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef15', nullable: true })
  dLTypeRef15: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef16', nullable: true })
  dLTypeRef16: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef17', nullable: true })
  dLTypeRef17: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef18', nullable: true })
  dLTypeRef18: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef19', nullable: true })
  dLTypeRef19: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef20', nullable: true })
  dLTypeRef20: number | null;

  @Column({ type: 'integer', name: 'FilledDLLevelNumber' })
  filledDLLevelNumber: number;

  @Column({ type: 'boolean', name: 'IncludeFilter' })
  includeFilter: boolean;

  @Column({ type: 'integer', name: 'PeriodNatureType', nullable: true })
  periodNatureType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}