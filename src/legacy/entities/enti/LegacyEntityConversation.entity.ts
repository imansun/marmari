import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityConversation' })
export class LegacyEntityConversation {
  @PrimaryColumn({ type: 'bigint', name: 'EntityConversationID' })
  entityConversationID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'character varying', name: 'ConversationIdentifier' })
  conversationIdentifier: string;

  @Column({ type: 'character varying', name: 'Body' })
  body: string;

  @Column({ type: 'boolean', name: 'IsPublic' })
  isPublic: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}