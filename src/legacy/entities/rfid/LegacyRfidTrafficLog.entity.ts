import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidTrafficLog' })
export class LegacyRfidTrafficLog {
  @PrimaryColumn({ type: 'bigint', name: 'RfidTrafficLogID' })
  rfidTrafficLogID: number;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'timestamp without time zone', name: 'EventDateTime' })
  eventDateTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReceivedDateTime' })
  receivedDateTime: Date;

  @Column({ type: 'character varying', name: 'FunctionKey', nullable: true })
  functionKey: string | null;

  @Column({ type: 'integer', name: 'VerificationMethod', default: 0 })
  verificationMethod: number;

  @Column({ type: 'integer', name: 'Status', default: 1 })
  status: number;

  @Column({ type: 'bigint', name: 'RfidCardRef', nullable: true })
  rfidCardRef: number | null;

  @Column({ type: 'character varying', name: 'CardNumber' })
  cardNumber: string;

  @Column({ type: 'bigint', name: 'EmployeeRef', nullable: true })
  employeeRef: number | null;

  @Column({ type: 'character varying', name: 'RfidDeviceIP' })
  rfidDeviceIP: string;

  @Column({ type: 'character varying', name: 'RfidDevicePort' })
  rfidDevicePort: string;

  @Column({ type: 'bigint', name: 'RfidDeviceRef' })
  rfidDeviceRef: number;

  @Column({ type: 'bigint', name: 'RfidGateRef' })
  rfidGateRef: number;

  @Column({ type: 'bigint', name: 'ReaderCode' })
  readerCode: number;

  @Column({ type: 'bigint', name: 'RfidCardReaderRef', nullable: true })
  rfidCardReaderRef: number | null;

  @Column({ type: 'integer', name: 'ReaderTypeCode', nullable: true })
  readerTypeCode: number | null;

  @Column({ type: 'character varying', name: 'ErrorMessage', nullable: true })
  errorMessage: string | null;

  @Column({ type: 'integer', name: 'TransferStatus', default: 0 })
  transferStatus: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}