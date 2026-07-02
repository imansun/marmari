import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailDocumentPatternAdditionalField' })
export class LegacyRetailDocumentPatternAdditionalField {
  @PrimaryColumn({ type: 'bigint', name: 'RetailDocumentPatternAdditionalFieldID' })
  retailDocumentPatternAdditionalFieldID: number;

  @Column({ type: 'bigint', name: 'RetailDocumentPatternRef' })
  retailDocumentPatternRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'Required' })
  required: boolean;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}