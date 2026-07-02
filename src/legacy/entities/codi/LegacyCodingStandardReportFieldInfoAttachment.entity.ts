import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardReportFieldInfoAttachment' })
export class LegacyCodingStandardReportFieldInfoAttachment {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardReportFieldInfoAttachmentID' })
  codingStandardReportFieldInfoAttachmentID: number;

  @Column({ type: 'bigint', name: 'CodingStandardReportFieldInfoRef' })
  codingStandardReportFieldInfoRef: number;

  @Column({ type: 'character varying', name: 'KeyValue' })
  keyValue: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}