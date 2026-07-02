import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TableIdGen' })
export class LegacyTableIdGen {
  @PrimaryColumn({ type: 'character varying', name: 'TableName' })
  tableName: string;

  @Column({ type: 'bigint', name: 'LastId' })
  lastId: number;

}