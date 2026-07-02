import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferringOpAccelerator' })
export class LegacyReferringOpAccelerator {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringOpAcceleratorID' })
  referringOpAcceleratorID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Content' })
  content: string;

  @Column({ type: 'integer', name: 'Mode' })
  mode: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}