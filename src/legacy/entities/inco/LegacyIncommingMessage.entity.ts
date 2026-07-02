import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IncommingMessage' })
export class LegacyIncommingMessage {
  @PrimaryColumn({ type: 'bigint', name: 'IncommingMessageID' })
  incommingMessageID: number;

  @Column({ type: 'character varying', name: 'ReferenceID', nullable: true })
  referenceID: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'ChannelUniqueName' })
  channelUniqueName: string;

  @Column({ type: 'integer', name: 'MediaType' })
  mediaType: number;

  @Column({ type: 'integer', name: 'SubType' })
  subType: number;

  @Column({ type: 'text', name: 'Message' })
  message: string;

  @Column({ type: 'text', name: 'Sender' })
  sender: string;

  @Column({ type: 'timestamp without time zone', name: 'InsertDate' })
  insertDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReceiveDate' })
  receiveDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}