import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityConversationRecipient' })
export class LegacyEntityConversationRecipient {
  @PrimaryColumn({ type: 'bigint', name: 'EntityConversationRecipientID' })
  entityConversationRecipientID: number;

  @Column({ type: 'bigint', name: 'EntityConversationRef' })
  entityConversationRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

}