import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MajidnTax' })
export class LegacyMajidnTax {
  @PrimaryColumn({ type: 'character varying', name: 'Voucherref' })
  voucherref: string | null;

  @PrimaryColumn({ type: 'character varying' })
  tax: string | null;

}