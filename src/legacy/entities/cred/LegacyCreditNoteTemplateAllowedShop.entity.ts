import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CreditNoteTemplateAllowedShop' })
export class LegacyCreditNoteTemplateAllowedShop {
  @PrimaryColumn({ type: 'bigint', name: 'CreditNoteTemplateAllowedShopID' })
  creditNoteTemplateAllowedShopID: number;

  @Column({ type: 'bigint', name: 'CreditNoteTemplateRef' })
  creditNoteTemplateRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}