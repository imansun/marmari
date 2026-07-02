import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReviewTemplateItem' })
export class LegacyReviewTemplateItem {
  @PrimaryColumn({ type: 'bigint', name: 'ReviewTemplateItemID' })
  reviewTemplateItemID: number;

  @Column({ type: 'bigint', name: 'ReviewTemplateRef' })
  reviewTemplateRef: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'text', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}