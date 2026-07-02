import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReviewTemplate' })
export class LegacyReviewTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'ReviewTemplateID' })
  reviewTemplateID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IncludesFilters' })
  includesFilters: boolean;

  @Column({ type: 'integer', name: 'TemplateVersion' })
  templateVersion: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

}