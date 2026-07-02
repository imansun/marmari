import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'basepay' })
export class LegacyBasepay {
  @PrimaryColumn({ type: 'double precision' })
  perscode: string | null;

  @PrimaryColumn({ type: 'double precision' })
  mmah: string | null;

}