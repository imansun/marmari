import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceNewsItem' })
export class LegacySelfServiceNewsItem {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceNewsItemID' })
  selfServiceNewsItemID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'timestamp without time zone', name: 'RegistrationDate' })
  registrationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'bytea', name: 'Picture', nullable: true })
  picture: Buffer | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}