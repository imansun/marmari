import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EncumbranceRequestItem' })
export class LegacyEncumbranceRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'EncumbranceRequestItemID' })
  encumbranceRequestItemID: number;

  @Column({ type: 'bigint', name: 'EncumbranceRequestRef' })
  encumbranceRequestRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}