import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Portal' })
export class LegacyPortal {
  @PrimaryColumn({ type: 'bigint', name: 'PortalID' })
  portalID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'PortalKey', nullable: true })
  portalKey: string | null;

}