import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalTrafficLog_BACKUP' })
export class LegacyRfidLocalTrafficLogBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalTrafficLogID' })
  rfidLocalTrafficLogID: number;

  @PrimaryColumn({ type: 'character varying', name: 'CardNumber' })
  cardNumber: string;

  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalReaderRef' })
  rfidLocalReaderRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalControllerRef' })
  rfidLocalControllerRef: number;

  @PrimaryColumn({ type: 'integer', name: 'RfidLocalGateCode' })
  rfidLocalGateCode: number;

  @PrimaryColumn({ type: 'integer', name: 'StatusCode' })
  statusCode: number;

  @PrimaryColumn({ type: 'character varying', name: 'FunctionKey' })
  functionKey: string | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'RecordDateTime' })
  recordDateTime: Date;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ReceiveDateTime' })
  receiveDateTime: Date;

  @PrimaryColumn({ type: 'boolean', name: 'Transferable' })
  transferable: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'Sent' })
  sent: boolean;

  @PrimaryColumn({ type: 'character varying', name: 'LogMessage' })
  logMessage: string | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

}