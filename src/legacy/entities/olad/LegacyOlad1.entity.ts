import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'olad1' })
export class LegacyOlad1 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteID' })
  employeeStatuteID: number | null;

  @PrimaryColumn({ type: 'double precision' })
  olad: string | null;

}