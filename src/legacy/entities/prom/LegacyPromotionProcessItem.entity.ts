import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PromotionProcessItem' })
export class LegacyPromotionProcessItem {
  @PrimaryColumn({ type: 'bigint', name: 'PromotionProcessItemID' })
  promotionProcessItemID: number;

  @Column({ type: 'bigint', name: 'PromotionProcessRef' })
  promotionProcessRef: number;

  @Column({ type: 'bigint', name: 'PromotionStructureFactorRef' })
  promotionStructureFactorRef: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'character varying', name: 'EditedValue', nullable: true })
  editedValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}