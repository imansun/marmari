import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GlobalSearchIndex' })
export class LegacyGlobalSearchIndex {
  @PrimaryColumn({ type: 'bigint', name: 'Id' })
  id: number;

  @Column({ type: 'character varying', name: 'TableSchema' })
  tableSchema: string;

  @Column({ type: 'character varying', name: 'TableName' })
  tableName: string;

  @Column({ type: 'character varying', name: 'ColumnName' })
  columnName: string;

  @Column({ type: 'character varying', name: 'SearchText' })
  searchText: string;

  @Column({ type: 'timestamp without time zone', name: 'LastUpdated', nullable: true })
  lastUpdated: Date | null;

}