import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationManagementPortalUser' })
export class LegacyTransportationManagementPortalUser {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationManagementPortalUserID' })
  transportationManagementPortalUserID: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'boolean', name: 'IsAdmin' })
  isAdmin: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'FirstName', nullable: true })
  firstName: string | null;

  @Column({ type: 'character varying', name: 'LastName', nullable: true })
  lastName: string | null;

  @Column({ type: 'character varying', name: 'UserName' })
  userName: string;

  @Column({ type: 'character varying', name: 'Password' })
  password: string;

  @Column({ type: 'character varying', name: 'Email', nullable: true })
  email: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}