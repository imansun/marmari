import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ECEEmail' })
export class LegacyECEEmail {
  @PrimaryColumn({ type: 'bigint', name: 'ECEEmailID' })
  eCEEmailID: number;

  @Column({ type: 'bigint', name: 'EmailAccountRef' })
  emailAccountRef: number;

  @Column({ type: 'bigint', name: 'EmailRef' })
  emailRef: number;

  @Column({ type: 'bigint', name: 'LetterRef', nullable: true })
  letterRef: number | null;

  @Column({ type: 'character varying', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'character varying', name: 'GroupId', nullable: true })
  groupId: string | null;

  @Column({ type: 'character varying', name: 'Subject', nullable: true })
  subject: string | null;

  @Column({ type: 'character varying', name: 'Sender', nullable: true })
  sender: string | null;

  @Column({ type: 'character varying', name: 'SenderOrganization', nullable: true })
  senderOrganization: string | null;

  @Column({ type: 'character varying', name: 'SenderCode', nullable: true })
  senderCode: string | null;

  @Column({ type: 'character varying', name: 'SenderSoftwareDeveloper', nullable: true })
  senderSoftwareDeveloper: string | null;

  @Column({ type: 'character varying', name: 'SenderSoftwareGUID', nullable: true })
  senderSoftwareGUID: string | null;

  @Column({ type: 'character varying', name: 'ReceiverOrganization', nullable: true })
  receiverOrganization: string | null;

  @Column({ type: 'character varying', name: 'ReceiverCode', nullable: true })
  receiverCode: string | null;

  @Column({ type: 'integer', name: 'EmailType' })
  emailType: number;

  @Column({ type: 'integer', name: 'ECEType' })
  eCEType: number;

  @Column({ type: 'boolean', name: 'Imported', nullable: true })
  imported: boolean | null;

  @Column({ type: 'character varying', name: 'Body', nullable: true })
  body: string | null;

  @Column({ type: 'timestamp without time zone', name: 'SendDate' })
  sendDate: Date;

  @Column({ type: 'character varying', name: 'LetterNo', nullable: true })
  letterNo: string | null;

  @Column({ type: 'timestamp without time zone', name: 'LetterDateTime', nullable: true })
  letterDateTime: Date | null;

  @Column({ type: 'character varying', name: 'SentCode', nullable: true })
  sentCode: string | null;

  @Column({ type: 'character varying', name: 'RegistrationNo', nullable: true })
  registrationNo: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RegistrationDateTime', nullable: true })
  registrationDateTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}