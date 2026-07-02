import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DashboardsInShell' })
export class LegacyDashboardsInShell {
  @PrimaryColumn({ type: 'bigint', name: 'DashboardsInShellID' })
  dashboardsInShellID: number;

  @Column({ type: 'bigint', name: 'DashboardRef' })
  dashboardRef: number;

  @Column({ type: 'bigint', name: 'OrderIndex', nullable: true })
  orderIndex: number | null;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator', default: 1 })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier', default: 1 })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'boolean', name: 'IsShow' })
  isShow: boolean;

}