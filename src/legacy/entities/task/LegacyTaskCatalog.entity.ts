import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaskCatalog' })
export class LegacyTaskCatalog {
  @PrimaryColumn({ type: 'bigint', name: 'TaskCatalogID' })
  taskCatalogID: number;

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

  @Column({ type: 'integer', name: 'RequiredTime', nullable: true })
  requiredTime: number | null;

  @Column({ type: 'integer', name: 'DueDate', nullable: true })
  dueDate: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}