import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScaleGroup' })
export class LegacyScaleGroup {
  @PrimaryColumn({ type: 'bigint', name: 'ScaleGroupID' })
  scaleGroupID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

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

  @Column({ type: 'character varying', name: 'ModelUniqueKey', nullable: true })
  modelUniqueKey: string | null;

  @Column({ type: 'character varying', name: 'KeyboardLayoutKey', nullable: true })
  keyboardLayoutKey: string | null;

}