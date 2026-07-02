import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DynamicComponentMenu' })
export class LegacyDynamicComponentMenu {
  @PrimaryColumn({ type: 'bigint', name: 'DynamicComponentMenuID' })
  dynamicComponentMenuID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'MenuItems' })
  menuItems: string;

  @Column({ type: 'character varying', name: 'PortalKey', nullable: true })
  portalKey: string | null;

}