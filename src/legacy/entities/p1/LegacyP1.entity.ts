import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'p1' })
export class LegacyP1 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeID' })
  employeeID: number | null;

  @PrimaryColumn({ type: 'double precision' })
  postcode: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'PostID' })
  postID: number | null;

}