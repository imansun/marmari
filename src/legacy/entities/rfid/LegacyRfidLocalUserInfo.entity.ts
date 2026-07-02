import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalUserInfo' })
export class LegacyRfidLocalUserInfo {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalUserInfoID' })
  rfidLocalUserInfoID: number;

  @Column({ type: 'character varying', name: 'CardNumber' })
  cardNumber: string;

  @Column({ type: 'bigint', name: 'RfidLocalEmployeeRef', nullable: true })
  rfidLocalEmployeeRef: number | null;

  @Column({ type: 'boolean', name: 'Sent' })
  sent: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}