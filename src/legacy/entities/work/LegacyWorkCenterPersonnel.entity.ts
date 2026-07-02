import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterPersonnel' })
export class LegacyWorkCenterPersonnel {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterPersonnelID' })
  workCenterPersonnelID: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}