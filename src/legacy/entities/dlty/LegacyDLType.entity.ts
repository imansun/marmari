import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DLType' })
export class LegacyDLType {
  @PrimaryColumn({ type: 'bigint', name: 'DLTypeID' })
  dLTypeID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'character varying', name: 'DefaultCode', nullable: true })
  defaultCode: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'character varying', name: 'Discriminator', nullable: true })
  discriminator: string | null;

  @Column({ type: 'bigint', name: 'ParentDLTypeRef', nullable: true })
  parentDLTypeRef: number | null;

  @Column({ type: 'boolean', name: 'IsParentRequired' })
  isParentRequired: boolean;

  @Column({ type: 'integer', name: 'ClassificationNumberLength' })
  classificationNumberLength: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}