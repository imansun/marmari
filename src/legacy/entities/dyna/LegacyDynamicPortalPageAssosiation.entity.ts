import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DynamicPortalPageAssosiation' })
export class LegacyDynamicPortalPageAssosiation {
  @PrimaryColumn({ type: 'bigint', name: 'DynamicPortalPageAssosiationID' })
  dynamicPortalPageAssosiationID: number;

  @Column({ type: 'bigint', name: 'PortalRef' })
  portalRef: number;

  @Column({ type: 'bigint', name: 'PageRef' })
  pageRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}