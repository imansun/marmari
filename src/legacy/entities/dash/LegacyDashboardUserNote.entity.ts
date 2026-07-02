import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DashboardUserNote' })
export class LegacyDashboardUserNote {
  @PrimaryColumn({ type: 'bigint', name: 'DashboardUserNoteID' })
  dashboardUserNoteID: number;

  @Column({ type: 'bigint', name: 'DashboardRef' })
  dashboardRef: number;

  @Column({ type: 'character varying', name: 'WidgetID', nullable: true })
  widgetID: string | null;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'character varying', name: 'Note' })
  note: string;

  @Column({ type: 'timestamp without time zone', name: 'NoteDate' })
  noteDate: Date;

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

}