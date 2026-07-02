import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaterialClass' })
export class LegacyMaterialClass {
  @PrimaryColumn({ type: 'bigint', name: 'MaterialClassID' })
  materialClassID: number;

  @Column({ type: 'bigint', name: 'GrandParentRef' })
  grandParentRef: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'integer', name: 'State', nullable: true })
  state: number | null;

  @Column({ type: 'integer', name: 'ClassType' })
  classType: number;

  @Column({ type: 'boolean', name: 'IsDirty', nullable: true })
  isDirty: boolean | null;

  @Column({ type: 'boolean', name: 'CompleteAssembly', nullable: true })
  completeAssembly: boolean | null;

  @Column({ type: 'bigint', name: 'MajorUnitRef', nullable: true })
  majorUnitRef: number | null;

  @Column({ type: 'bigint', name: 'ConvertedPartRef', nullable: true })
  convertedPartRef: number | null;

  @Column({ type: 'integer', name: 'Nature', nullable: true })
  nature: number | null;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'ReferenceMaterialClassRef', nullable: true })
  referenceMaterialClassRef: number | null;

  @Column({ type: 'integer', name: 'Priority', nullable: true })
  priority: number | null;

  @Column({ type: 'bigint', name: 'MaterialClassProposalItemRef', nullable: true })
  materialClassProposalItemRef: number | null;

  @Column({ type: 'integer', name: 'StandardCode', nullable: true })
  standardCode: number | null;

}