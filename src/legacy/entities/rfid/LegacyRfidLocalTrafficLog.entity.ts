import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalTrafficLog' })
export class LegacyRfidLocalTrafficLog {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalTrafficLogID' })
  rfidLocalTrafficLogID: number;

  @Column({ type: 'character varying', name: 'CardNumber' })
  cardNumber: string;

  @Column({ type: 'bigint', name: 'RfidLocalReaderRef' })
  rfidLocalReaderRef: number;

  @Column({ type: 'bigint', name: 'RfidLocalControllerRef' })
  rfidLocalControllerRef: number;

  @Column({ type: 'integer', name: 'RfidLocalGateCode' })
  rfidLocalGateCode: number;

  @Column({ type: 'integer', name: 'StatusCode' })
  statusCode: number;

  @Column({ type: 'character varying', name: 'FunctionKey', nullable: true })
  functionKey: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RecordDateTime' })
  recordDateTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReceiveDateTime' })
  receiveDateTime: Date;

  @Column({ type: 'boolean', name: 'Transferable' })
  transferable: boolean;

  @Column({ type: 'boolean', name: 'Sent' })
  sent: boolean;

  @Column({ type: 'character varying', name: 'LogMessage', nullable: true })
  logMessage: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}