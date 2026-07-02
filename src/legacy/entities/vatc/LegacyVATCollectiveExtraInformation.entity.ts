import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VATCollectiveExtraInformation' })
export class LegacyVATCollectiveExtraInformation {
  @PrimaryColumn({ type: 'bigint', name: 'VATCollectiveExtraInformationID' })
  vATCollectiveExtraInformationID: number;

  @Column({ type: 'bigint', name: 'VATCollectiveInformationRef' })
  vATCollectiveInformationRef: number;

  @Column({ type: 'character varying', name: 'ExtraFieldName' })
  extraFieldName: string;

  @Column({ type: 'character varying', name: 'ExtraFieldType' })
  extraFieldType: string;

  @Column({ type: 'character varying', name: 'ExtraFieldValue' })
  extraFieldValue: string;

  @Column({ type: 'boolean', name: 'ExtraFieldIsEditable' })
  extraFieldIsEditable: boolean;

  @Column({ type: 'character varying', name: 'ExtraFieldTitle' })
  extraFieldTitle: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}