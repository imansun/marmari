import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOfficeAutoTourGeneration' })
export class LegacySalesOfficeAutoTourGeneration {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficeAutoTourGenerationID' })
  salesOfficeAutoTourGenerationID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}