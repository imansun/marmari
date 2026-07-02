import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'zahrafeildvalue_duplicate' })
export class LegacyZahrafeildvalueduplicate {
  @PrimaryColumn({ type: 'bigint' })
  count: number | null;

  @PrimaryColumn({ type: 'bigint' })
  recordid: number | null;

}