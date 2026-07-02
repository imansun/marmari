import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidResponse' })
export class LegacyRfidResponse {
  @PrimaryColumn({ type: 'bigint', name: 'RfidResponseID' })
  rfidResponseID: number;

  @Column({ type: 'bigint', name: 'DeviceId' })
  deviceId: number;

  @Column({ type: 'uuid', name: 'MessageId' })
  messageId: string;

  @Column({ type: 'character varying', name: 'MessageName' })
  messageName: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'Metadata', nullable: true })
  metadata: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ReceivedDate' })
  receivedDate: Date;

  @Column({ type: 'integer', name: 'IssuerType', default: 1 })
  issuerType: number;

  @Column({ type: 'integer', name: 'FailedReason', nullable: true })
  failedReason: number | null;

}