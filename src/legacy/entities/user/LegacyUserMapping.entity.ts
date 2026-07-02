import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UserMapping' })
export class LegacyUserMapping {
  @PrimaryColumn({ type: 'bigint', name: 'UserMappingID' })
  userMappingID: number;

  @Column({ type: 'character varying', name: 'UserName' })
  userName: string;

  @Column({ type: 'character varying', name: 'LegacyUserName' })
  legacyUserName: string;

  @Column({ type: 'character varying', name: 'Password', nullable: true })
  password: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}