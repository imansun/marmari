import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportPathMapping' })
export class LegacyReportPathMapping {
  @PrimaryColumn({ type: 'bigint', name: 'ReportPathMappingID' })
  reportPathMappingID: number;

  @Column({ type: 'character varying', name: 'ReportPath' })
  reportPath: string;

  @Column({ type: 'character varying', name: 'MappedPath' })
  mappedPath: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}