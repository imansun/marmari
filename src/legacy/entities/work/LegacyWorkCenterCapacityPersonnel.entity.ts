import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterCapacityPersonnel' })
export class LegacyWorkCenterCapacityPersonnel {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterCapacityPersonnelID' })
  workCenterCapacityPersonnelID: number;

  @Column({ type: 'bigint', name: 'WorkCenterCapacityRef' })
  workCenterCapacityRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}