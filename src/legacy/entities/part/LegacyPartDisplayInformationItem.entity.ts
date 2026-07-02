import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartDisplayInformationItem' })
export class LegacyPartDisplayInformationItem {
  @PrimaryColumn({ type: 'bigint', name: 'PartDisplayInformationItemID' })
  partDisplayInformationItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'PartDisplayInformationRef' })
  partDisplayInformationRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'CharacteristicType' })
  characteristicType: number;

  @Column({ type: 'bigint', name: 'Characteristic', nullable: true })
  characteristic: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}