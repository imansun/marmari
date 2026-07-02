import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationPattern' })
export class LegacyNotificationPattern {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationPatternID' })
  notificationPatternID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'NotifierEntityType' })
  notifierEntityType: number;

  @Column({ type: 'integer', name: 'NotifierEntityState' })
  notifierEntityState: number;

  @Column({ type: 'integer', name: 'ReceiverType' })
  receiverType: number;

  @Column({ type: 'bigint', name: 'ReceiverEntityGroupRef', nullable: true })
  receiverEntityGroupRef: number | null;

  @Column({ type: 'bigint', name: 'ReceiverSpecificUserRef', nullable: true })
  receiverSpecificUserRef: number | null;

  @Column({ type: 'character varying', name: 'SmsSendingChannelUniqueName', nullable: true })
  smsSendingChannelUniqueName: string | null;

  @Column({ type: 'character varying', name: 'EmailSendingChannelUniqueName', nullable: true })
  emailSendingChannelUniqueName: string | null;

  @Column({ type: 'character varying', name: 'TelegramSendingChannelUniqueName', nullable: true })
  telegramSendingChannelUniqueName: string | null;

  @Column({ type: 'character varying', name: 'PatternContent', nullable: true })
  patternContent: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}