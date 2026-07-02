import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkstationCapacity' })
export class LegacyWorkstationCapacity {
  @PrimaryColumn({ type: 'bigint', name: 'WorkstationCapacityID' })
  workstationCapacityID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'numeric', name: 'LabourCapacity' })
  labourCapacity: number;

  @Column({ type: 'numeric', name: 'OverheadCapacity' })
  overheadCapacity: number;

  @Column({ type: 'numeric', name: 'ExpectedCapacity', nullable: true })
  expectedCapacity: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}