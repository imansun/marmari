import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalOnlineSiteInfo' })
export class LegacyRfidLocalOnlineSiteInfo {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalOnlineSiteInfoID' })
  rfidLocalOnlineSiteInfoID: number;

  @Column({ type: 'integer', name: 'SiteCode' })
  siteCode: number;

  @Column({ type: 'character varying', name: 'HostName' })
  hostName: string;

  @Column({ type: 'character varying', name: 'PortNumber' })
  portNumber: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}