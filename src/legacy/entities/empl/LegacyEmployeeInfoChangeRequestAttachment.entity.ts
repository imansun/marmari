import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeInfoChangeRequestAttachment' })
export class LegacyEmployeeInfoChangeRequestAttachment {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeInfoChangeRequestAttachmentID' })
  employeeInfoChangeRequestAttachmentID: number;

  @Column({ type: 'character varying', name: 'FileName' })
  fileName: string;

  @Column({ type: 'bytea', name: 'Attachment' })
  attachment: Buffer;

  @Column({ type: 'bigint', name: 'EmployeeInfoChangeRequestRef' })
  employeeInfoChangeRequestRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}