import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferringAccelerator' })
export class LegacyReferringAccelerator {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringAcceleratorID' })
  referringAcceleratorID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Body', nullable: true })
  body: string | null;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}