import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FaxCenter' })
export class LegacyFaxCenter {
  @PrimaryColumn({ type: 'bigint', name: 'FaxCenterID' })
  faxCenterID: number;

  @Column({ type: 'character varying', name: 'DeviceID', nullable: true })
  deviceID: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'DomainName' })
  domainName: string;

  @Column({ type: 'character varying', name: 'FriendlyName', nullable: true })
  friendlyName: string | null;

  @Column({ type: 'boolean', name: 'AllowSend', default: true })
  allowSend: boolean;

  @Column({ type: 'boolean', name: 'AllowReceive', default: true })
  allowReceive: boolean;

  @Column({ type: 'character varying', name: 'UniqueName', nullable: true })
  uniqueName: string | null;

  @Column({ type: 'integer', name: 'RingsBeforeAnswer', default: 3 })
  ringsBeforeAnswer: number;

  @Column({ type: 'timestamp without time zone', name: 'DiscountRateStart', nullable: true })
  discountRateStart: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'DiscountRateEnd', nullable: true })
  discountRateEnd: Date | null;

  @Column({ type: 'integer', name: 'NumberOfAttempts', default: 3 })
  numberOfAttempts: number;

  @Column({ type: 'integer', name: 'DialAgainAfter', default: 10 })
  dialAgainAfter: number;

  @Column({ type: 'character varying', name: 'SenderInfo', nullable: true })
  senderInfo: string | null;

  @Column({ type: 'integer', name: 'State', default: 0 })
  state: number;

  @Column({ type: 'character varying', name: 'TSID', nullable: true })
  tSID: string | null;

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