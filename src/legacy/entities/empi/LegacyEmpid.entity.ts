import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'empid' })
export class LegacyEmpid {
  @PrimaryColumn({ type: 'bigint' })
  employeeid: number;

}