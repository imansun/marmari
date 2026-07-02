import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartOrderTaskItem' })
export class LegacyPartOrderTaskItem {
  @PrimaryColumn({ type: 'bigint', name: 'PartOrderTaskItemID' })
  partOrderTaskItemID: number;

  @Column({ type: 'bigint', name: 'PartOrderTaskRef' })
  partOrderTaskRef: number;

  @Column({ type: 'bigint', name: 'RetailServerRef' })
  retailServerRef: number;

  @Column({ type: 'character varying', name: 'Content' })
  content: string;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'ExtraInfo', nullable: true })
  extraInfo: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}