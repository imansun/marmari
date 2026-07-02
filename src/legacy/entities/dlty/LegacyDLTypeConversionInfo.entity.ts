import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DLTypeConversionInfo' })
export class LegacyDLTypeConversionInfo {
  @PrimaryColumn({ type: 'bigint', name: 'DLTypeConversionInfoID' })
  dLTypeConversionInfoID: number;

  @Column({ type: 'bigint', name: 'DLTypeRef' })
  dLTypeRef: number;

  @Column({ type: 'bigint', name: 'SystemDLTypeRef' })
  systemDLTypeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}