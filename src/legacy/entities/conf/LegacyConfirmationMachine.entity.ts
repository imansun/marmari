import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationMachine' })
export class LegacyConfirmationMachine {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationMachineID' })
  confirmationMachineID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'MachineRef' })
  machineRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDateTime', nullable: true })
  startDateTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDateTime', nullable: true })
  endDateTime: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'DurationMinutes' })
  durationMinutes: number;

  @Column({ type: 'integer', name: 'DurationHours' })
  durationHours: number;

}