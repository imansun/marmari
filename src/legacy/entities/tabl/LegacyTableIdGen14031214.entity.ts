import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TableIdGen14031214' })
export class LegacyTableIdGen14031214 {
  @PrimaryColumn({ type: 'character varying', name: 'TableName' })
  tableName: string;

  @PrimaryColumn({ type: 'bigint', name: 'LastId' })
  lastId: number;

}