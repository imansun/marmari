import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialSubscribingModule' })
export class LegacySerialSubscribingModule {
  @PrimaryColumn({ type: 'bigint', name: 'SerialSubscribingModuleID' })
  serialSubscribingModuleID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'TitleKey' })
  titleKey: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}