import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'zahrareserve' })
export class LegacyZahrareserve {
  @PrimaryColumn({ type: 'integer' })
  dd: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ReserveID' })
  reserveID: number;

  @PrimaryColumn({ type: 'timestamp without time zone' })
  rdate: Date;

  @PrimaryColumn({ type: 'timestamp without time zone' })
  date: Date;

}