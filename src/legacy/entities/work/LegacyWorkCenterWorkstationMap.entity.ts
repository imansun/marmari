import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterWorkstationMap' })
export class LegacyWorkCenterWorkstationMap {
  @PrimaryColumn({ type: 'bigint', name: 'WrokCenterWorkstationMapID' })
  wrokCenterWorkstationMapID: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}