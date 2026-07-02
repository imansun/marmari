import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountMapping' })
export class LegacyAccountMapping {
  @PrimaryColumn({ type: 'bigint', name: 'AccountMappingID' })
  accountMappingID: number;

  @Column({ type: 'bigint', name: 'LeadingSLRef', nullable: true })
  leadingSLRef: number | null;

  @Column({ type: 'integer', name: 'Level', nullable: true })
  level: number | null;

  @Column({ type: 'boolean', name: 'IsTemporary' })
  isTemporary: boolean;

  @Column({ type: 'character varying', name: 'LeadingDLLevel4', nullable: true })
  leadingDLLevel4: string | null;

  @Column({ type: 'character varying', name: 'LeadingDLLevel5', nullable: true })
  leadingDLLevel5: string | null;

  @Column({ type: 'character varying', name: 'LeadingDLLevel6', nullable: true })
  leadingDLLevel6: string | null;

  @Column({ type: 'character varying', name: 'LeadingDLLevel7', nullable: true })
  leadingDLLevel7: string | null;

  @Column({ type: 'character varying', name: 'LeadingDLLevel8', nullable: true })
  leadingDLLevel8: string | null;

  @Column({ type: 'character varying', name: 'LeadingDLLevel9', nullable: true })
  leadingDLLevel9: string | null;

  @Column({ type: 'bigint', name: 'SecondarySLRef', nullable: true })
  secondarySLRef: number | null;

  @Column({ type: 'character varying', name: 'SecondaryDLLevel4', nullable: true })
  secondaryDLLevel4: string | null;

  @Column({ type: 'character varying', name: 'SecondaryDLLevel5', nullable: true })
  secondaryDLLevel5: string | null;

  @Column({ type: 'character varying', name: 'SecondaryDLLevel6', nullable: true })
  secondaryDLLevel6: string | null;

  @Column({ type: 'character varying', name: 'SecondaryDLLevel7', nullable: true })
  secondaryDLLevel7: string | null;

  @Column({ type: 'character varying', name: 'SecondaryDLLevel8', nullable: true })
  secondaryDLLevel8: string | null;

  @Column({ type: 'character varying', name: 'SecondaryDLLevel9', nullable: true })
  secondaryDLLevel9: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}