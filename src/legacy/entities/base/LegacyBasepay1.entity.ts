import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'basepay1' })
export class LegacyBasepay1 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteID' })
  employeeStatuteID: number | null;

  @PrimaryColumn({ type: 'double precision' })
  mmah: string | null;

}