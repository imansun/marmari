import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerPharma' })
export class LegacyCustomerPharma {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerPharmaID' })
  customerPharmaID: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'character varying', name: 'GLN', nullable: true })
  gLN: string | null;

  @Column({ type: 'character varying', name: 'HIX', nullable: true })
  hIX: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}