import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountEstablishmentItem' })
export class LegacyAccountEstablishmentItem {
  @PrimaryColumn({ type: 'bigint', name: 'AccountEstablishmentItemID' })
  accountEstablishmentItemID: number;

  @Column({ type: 'bigint', name: 'AccountEstablishmentRef' })
  accountEstablishmentRef: number;

  @Column({ type: 'bigint', name: 'AccountRef' })
  accountRef: number;

  @Column({ type: 'bigint', name: 'SecondAccountRef', nullable: true })
  secondAccountRef: number | null;

  @Column({ type: 'bigint', name: 'ThirdAccountRef', nullable: true })
  thirdAccountRef: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'EstablishmentBalance', nullable: true })
  establishmentBalance: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}