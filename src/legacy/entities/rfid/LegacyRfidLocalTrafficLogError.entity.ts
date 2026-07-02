import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalTrafficLogError' })
export class LegacyRfidLocalTrafficLogError {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalTrafficLogErrorID' })
  rfidLocalTrafficLogErrorID: number;

  @Column({ type: 'character varying', name: 'AdditionalKey', nullable: true })
  additionalKey: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DateTime' })
  dateTime: Date;

  @Column({ type: 'character varying', name: 'DeviceName', nullable: true })
  deviceName: string | null;

  @Column({ type: 'integer', name: 'DeviceNumber', nullable: true })
  deviceNumber: number | null;

  @Column({ type: 'character varying', name: 'IPAddress', nullable: true })
  iPAddress: string | null;

  @Column({ type: 'integer', name: 'Reader', nullable: true })
  reader: number | null;

  @Column({ type: 'integer', name: 'Result' })
  result: number;

  @Column({ type: 'character varying', name: 'CardNumber', nullable: true })
  cardNumber: string | null;

  @Column({ type: 'integer', name: 'UserID', nullable: true })
  userID: number | null;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'character varying', name: 'Password', nullable: true })
  password: string | null;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}