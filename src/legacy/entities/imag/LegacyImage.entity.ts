import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Image' })
export class LegacyImage {
  @PrimaryColumn({ type: 'bigint', name: 'ImageID' })
  imageID: number;

  @Column({ type: 'bytea', name: 'Data' })
  data: Buffer;

  @Column({ type: 'character varying', name: 'Format' })
  format: string;

  @Column({ type: 'bytea', name: 'ThumbnailData', nullable: true })
  thumbnailData: Buffer | null;

  @Column({ type: 'character varying', name: 'ThumbnailFormat', nullable: true })
  thumbnailFormat: string | null;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'character varying', name: 'EntityColumnName' })
  entityColumnName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}