import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ECEOrganizationMap' })
export class LegacyECEOrganizationMap {
  @PrimaryColumn({ type: 'bigint', name: 'ECEOrganizationMapID' })
  eCEOrganizationMapID: number;

  @Column({ type: 'bigint', name: 'CorrespondentRef', nullable: true })
  correspondentRef: number | null;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'EmailAddress', nullable: true })
  emailAddress: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Guid' })
  guid: string;

}