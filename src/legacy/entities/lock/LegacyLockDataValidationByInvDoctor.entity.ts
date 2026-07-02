import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LockDataValidationByInvDoctor' })
export class LegacyLockDataValidationByInvDoctor {
  @PrimaryColumn({ type: 'boolean', name: 'ID' })
  iD: boolean;

  @PrimaryColumn({ type: 'character varying', name: 'Desctiption' })
  desctiption: string | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'StartTime' })
  startTime: Date;

}