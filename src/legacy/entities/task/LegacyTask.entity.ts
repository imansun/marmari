import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Task' })
export class LegacyTask {
  @PrimaryColumn({ type: 'bigint', name: 'TaskID' })
  taskID: number;

  @Column({ type: 'bigint', name: 'TaskTemplateRef' })
  taskTemplateRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'smallint', name: 'Type' })
  type: number;

  @Column({ type: 'smallint', name: 'Priority' })
  priority: number;

  @Column({ type: 'smallint', name: 'Category' })
  category: number;

  @Column({ type: 'integer', name: 'RequiredTime', nullable: true })
  requiredTime: number | null;

  @Column({ type: 'integer', name: 'DueDate', nullable: true })
  dueDate: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDateTime' })
  startDateTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDateTime' })
  endDateTime: Date;

  @Column({ type: 'bigint', name: 'Doer' })
  doer: number;

  @Column({ type: 'integer', name: 'Effectiveness', nullable: true })
  effectiveness: number | null;

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

  @Column({ type: 'bigint', name: 'RealDoer', nullable: true })
  realDoer: number | null;

  @Column({ type: 'timestamp without time zone', name: 'RealStartDateTime', nullable: true })
  realStartDateTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'RealEndDateTime', nullable: true })
  realEndDateTime: Date | null;

  @Column({ type: 'character varying', name: 'RealDescription', nullable: true })
  realDescription: string | null;

}