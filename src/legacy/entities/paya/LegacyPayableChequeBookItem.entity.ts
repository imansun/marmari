import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PayableChequeBookItem' })
export class LegacyPayableChequeBookItem {
  @PrimaryColumn({ type: 'bigint', name: 'PayableChequeBookItemID' })
  payableChequeBookItemID: number;

  @Column({ type: 'bigint', name: 'PayableChequeBookRef' })
  payableChequeBookRef: number;

  @Column({ type: 'character varying', name: 'Serial' })
  serial: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'SayadNumber', nullable: true })
  sayadNumber: string | null;

}