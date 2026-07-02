import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentProfileTemplate' })
export class LegacyEquipmentProfileTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentProfileTemplateID' })
  equipmentProfileTemplateID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}