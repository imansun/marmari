import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PortalComponent' })
export class LegacyPortalComponent {
  @PrimaryColumn({ type: 'bigint', name: 'PortalComponentID' })
  portalComponentID: number;

  @Column({ type: 'bigint', name: 'DynamicComponentRef', nullable: true })
  dynamicComponentRef: number | null;

  @Column({ type: 'integer', name: 'PortalState', default: 0 })
  portalState: number;

  @Column({ type: 'bigint', name: 'PortalRef' })
  portalRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}