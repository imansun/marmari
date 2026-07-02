import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConvertibleAccountItem' })
export class LegacyConvertibleAccountItem {
  @PrimaryColumn({ type: 'bigint', name: 'ConvertibleAccountItemID' })
  convertibleAccountItemID: number;

  @Column({ type: 'bigint', name: 'ConversionAccountItemRef' })
  conversionAccountItemRef: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

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

  @Column({ type: 'integer', name: 'FilledDLLevelNumber' })
  filledDLLevelNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}