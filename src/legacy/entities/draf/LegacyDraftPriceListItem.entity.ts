import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DraftPriceListItem' })
export class LegacyDraftPriceListItem {
  @PrimaryColumn({ type: 'bigint', name: 'DraftPriceListItemID' })
  draftPriceListItemID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'numeric', name: 'Fee', nullable: true })
  fee: number | null;

  @Column({ type: 'numeric', name: 'ConsumerFee', nullable: true })
  consumerFee: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'CreatorBrokerCode', nullable: true })
  creatorBrokerCode: string | null;

  @Column({ type: 'bigint', name: 'CreatorPartyRef', nullable: true })
  creatorPartyRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}