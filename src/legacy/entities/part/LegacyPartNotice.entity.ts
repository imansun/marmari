import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartNotice' })
export class LegacyPartNotice {
  @PrimaryColumn({ type: 'bigint', name: 'PartNoticeID' })
  partNoticeID: number;

  @Column({ type: 'character varying', name: 'DefaultName' })
  defaultName: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'NoticeType' })
  noticeType: number;

  @Column({ type: 'boolean', name: 'HasConfiguration' })
  hasConfiguration: boolean;

  @Column({ type: 'character varying', name: 'UIControllerClassType', nullable: true })
  uIControllerClassType: string | null;

  @Column({ type: 'text', name: 'ConfigurationData', nullable: true })
  configurationData: string | null;

  @Column({ type: 'character varying', name: 'BusinessControllerClassType' })
  businessControllerClassType: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'HasEqualCondition' })
  hasEqualCondition: boolean;

  @Column({ type: 'integer', name: 'DisplayUnitType' })
  displayUnitType: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'PlanningCodeStandardType', nullable: true })
  planningCodeStandardType: number | null;

}