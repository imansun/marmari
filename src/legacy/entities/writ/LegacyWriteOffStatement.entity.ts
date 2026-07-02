import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WriteOffStatement' })
export class LegacyWriteOffStatement {
  @PrimaryColumn({ type: 'bigint', name: 'WriteOffStatementID' })
  writeOffStatementID: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bigint', name: 'WriteOffPatternRef' })
  writeOffPatternRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}