import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Dashboard' })
export class LegacyDashboard {
  @PrimaryColumn({ type: 'bigint', name: 'DashboardID' })
  dashboardID: number;

  @Column({ type: 'bigint', name: 'DashboardCategoryRef', nullable: true })
  dashboardCategoryRef: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Data' })
  data: string;

  @Column({ type: 'boolean', name: 'Published' })
  published: boolean;

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

  @Column({ type: 'boolean', name: 'IsPublic' })
  isPublic: boolean;

}