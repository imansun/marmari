import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StaticID' })
export class LegacyStaticID {
  @PrimaryColumn({ type: 'character varying', name: 'TableName' })
  tableName: string;

  @PrimaryColumn({ type: 'bigint', name: 'RecordID' })
  recordID: number;

}