import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TermOfDelivery' })
export class LegacyTermOfDelivery {
  @PrimaryColumn({ type: 'bigint', name: 'TermOfDeliveryID' })
  termOfDeliveryID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'boolean', name: 'IsMarine', default: false })
  isMarine: boolean;

  @Column({ type: 'integer', name: 'TermOfDeliveryType' })
  termOfDeliveryType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}