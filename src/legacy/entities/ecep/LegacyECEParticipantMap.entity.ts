import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ECEParticipantMap' })
export class LegacyECEParticipantMap {
  @PrimaryColumn({ type: 'bigint', name: 'ECEParticipantMapID' })
  eCEParticipantMapID: number;

  @Column({ type: 'bigint', name: 'ECEOrganizationMapRef' })
  eCEOrganizationMapRef: number;

  @Column({ type: 'bigint', name: 'CorrespondentRef', nullable: true })
  correspondentRef: number | null;

  @Column({ type: 'character varying', name: 'Guid' })
  guid: string;

  @Column({ type: 'character varying', name: 'Department', nullable: true })
  department: string | null;

  @Column({ type: 'character varying', name: 'Position', nullable: true })
  position: string | null;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

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

}