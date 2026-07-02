import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartTemplate' })
export class LegacyPartTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'PartTemplateID' })
  partTemplateID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'PartType' })
  partType: number;

  @Column({ type: 'integer', name: 'ReservationLevel' })
  reservationLevel: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'CategoryRef', nullable: true })
  categoryRef: number | null;

  @Column({ type: 'bigint', name: 'CodeTemplateRef', nullable: true })
  codeTemplateRef: number | null;

  @Column({ type: 'integer', name: 'PartNature' })
  partNature: number;

  @Column({ type: 'boolean', name: 'FillBarcodeByPartCode' })
  fillBarcodeByPartCode: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}