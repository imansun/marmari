import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DataTransferMethodItem' })
export class LegacyDataTransferMethodItem {
  @PrimaryColumn({ type: 'bigint', name: 'DataTransferMethodItemID' })
  dataTransferMethodItemID: number;

  @Column({ type: 'bigint', name: 'DataTransferMethodRef' })
  dataTransferMethodRef: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'character varying', name: 'FieldName' })
  fieldName: string;

  @Column({ type: 'integer', name: 'FieldType' })
  fieldType: number;

  @Column({ type: 'integer', name: 'RefrencedEntityCode', nullable: true })
  refrencedEntityCode: number | null;

  @Column({ type: 'character varying', name: 'RefrencedFieldName', nullable: true })
  refrencedFieldName: string | null;

  @Column({ type: 'character varying', name: 'CellRefrence' })
  cellRefrence: string;

  @Column({ type: 'character varying', name: 'CellTitle', nullable: true })
  cellTitle: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}