import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OutgoingMessage' })
export class LegacyOutgoingMessage {
  @PrimaryColumn({ type: 'bigint', name: 'OutgoingMessageID' })
  outgoingMessageID: number;

  @Column({ type: 'character varying', name: 'ReferenceID', nullable: true })
  referenceID: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'integer', name: 'StatusDetail' })
  statusDetail: number;

  @Column({ type: 'character varying', name: 'ChannelUniqueName' })
  channelUniqueName: string;

  @Column({ type: 'integer', name: 'MediaType' })
  mediaType: number;

  @Column({ type: 'integer', name: 'SubType' })
  subType: number;

  @Column({ type: 'text', name: 'Message' })
  message: string;

  @Column({ type: 'text', name: 'Recipients' })
  recipients: string;

  @Column({ type: 'timestamp without time zone', name: 'InsertDate' })
  insertDate: Date;

  @Column({ type: 'text', name: 'Results' })
  results: string;

  @Column({ type: 'integer', name: 'RetryCount' })
  retryCount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}