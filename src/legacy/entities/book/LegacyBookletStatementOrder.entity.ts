import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BookletStatementOrder' })
export class LegacyBookletStatementOrder {
  @PrimaryColumn({ type: 'bigint', name: 'BookletStatementOrderID' })
  bookletStatementOrderID: number;

  @Column({ type: 'integer', name: 'OrderNumber' })
  orderNumber: number;

  @Column({ type: 'integer', name: 'StatementType' })
  statementType: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'NoteNumber' })
  noteNumber: string;

  @Column({ type: 'bigint', name: 'StructureRef' })
  structureRef: number;

  @Column({ type: 'integer', name: 'GroupNumber', nullable: true })
  groupNumber: number | null;

  @Column({ type: 'bigint', name: 'NoteStructureRef', nullable: true })
  noteStructureRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}