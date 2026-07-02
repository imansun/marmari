import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PromotionProcess' })
export class LegacyPromotionProcess {
  @PrimaryColumn({ type: 'bigint', name: 'PromotionProcessID' })
  promotionProcessID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'PromotionStructureRef' })
  promotionStructureRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ApplyDate' })
  applyDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'uuid', name: 'PromotionProcessGuid' })
  promotionProcessGuid: string;

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

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

}