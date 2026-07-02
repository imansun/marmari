import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessInstanceTaskDelivery' })
export class LegacyProcessInstanceTaskDelivery {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessInstanceTaskDeliveryID' })
  processInstanceTaskDeliveryID: number;

  @Column({ type: 'integer', name: 'MessageId', nullable: true })
  messageId: number | null;

  @Column({ type: 'bigint', name: 'ChatId', nullable: true })
  chatId: number | null;

  @Column({ type: 'bigint', name: 'PersonRef', nullable: true })
  personRef: number | null;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'bigint', name: 'PrimaryPartyRef', nullable: true })
  primaryPartyRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'AssignmentTime', nullable: true })
  assignmentTime: Date | null;

  @Column({ type: 'integer', name: 'State', nullable: true })
  state: number | null;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'bigint', name: 'ProcessInstanceTaskRef', nullable: true })
  processInstanceTaskRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ResolveTime', nullable: true })
  resolveTime: Date | null;

  @Column({ type: 'character varying', name: 'Context', nullable: true })
  context: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Deadline', nullable: true })
  deadline: Date | null;

  @Column({ type: 'integer', name: 'RelatedEntityCode', nullable: true })
  relatedEntityCode: number | null;

  @Column({ type: 'integer', name: 'SelectedOptionCode', nullable: true })
  selectedOptionCode: number | null;

  @Column({ type: 'character varying', name: 'SelectedOptionTitle', nullable: true })
  selectedOptionTitle: string | null;

  @Column({ type: 'character varying', name: 'SelectedOptionNote', nullable: true })
  selectedOptionNote: string | null;

  @Column({ type: 'character varying', name: 'Comment', nullable: true })
  comment: string | null;

  @Column({ type: 'character varying', name: 'ExtraDescription', nullable: true })
  extraDescription: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}