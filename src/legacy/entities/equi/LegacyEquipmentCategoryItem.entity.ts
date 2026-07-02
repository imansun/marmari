import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentCategoryItem' })
export class LegacyEquipmentCategoryItem {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentCategoryItemID' })
  equipmentCategoryItemID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'EquipmentCategoryRef' })
  equipmentCategoryRef: number;

  @Column({ type: 'integer', name: 'Left' })
  left: number;

  @Column({ type: 'integer', name: 'Right' })
  right: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}