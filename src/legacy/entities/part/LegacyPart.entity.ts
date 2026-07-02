import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Part' })
export class LegacyPart {
  @PrimaryColumn({ type: 'bigint', name: 'PartID' })
  partID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'LatinName', nullable: true })
  latinName: string | null;

  @Column({ type: 'character varying', name: 'TechnicalSpecification', nullable: true })
  technicalSpecification: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'Height', nullable: true })
  height: number | null;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'numeric', name: 'Length', nullable: true })
  length: number | null;

  @Column({ type: 'numeric', name: 'Width', nullable: true })
  width: number | null;

  @Column({ type: 'bigint', name: 'ProducerRef', nullable: true })
  producerRef: number | null;

  @Column({ type: 'boolean', name: 'IsInputDocumentSuspended' })
  isInputDocumentSuspended: boolean;

  @Column({ type: 'boolean', name: 'IsOutputDocumentSuspended' })
  isOutputDocumentSuspended: boolean;

  @Column({ type: 'character varying', name: 'PropertiesComment', nullable: true })
  propertiesComment: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'PartType' })
  partType: number;

  @Column({ type: 'integer', name: 'QuantityControlType', nullable: true })
  quantityControlType: number | null;

  @Column({ type: 'bigint', name: 'CodeTemplateRef', nullable: true })
  codeTemplateRef: number | null;

  @Column({ type: 'bigint', name: 'CategoryRef', nullable: true })
  categoryRef: number | null;

  @Column({ type: 'integer', name: 'PartNature' })
  partNature: number;

  @Column({ type: 'bigint', name: 'MajorUnitRef' })
  majorUnitRef: number;

  @Column({ type: 'bigint', name: 'MajorHomogeneousPartRef', nullable: true })
  majorHomogeneousPartRef: number | null;

  @Column({ type: 'character varying', name: 'CodeTemplateName', nullable: true })
  codeTemplateName: string | null;

  @Column({ type: 'integer', name: 'SecondType', nullable: true })
  secondType: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'integer', name: 'ReservationLevel' })
  reservationLevel: number;

  @Column({ type: 'boolean', name: 'ReserveWithTrackingFactor' })
  reserveWithTrackingFactor: boolean;

  @Column({ type: 'boolean', name: 'IsTaxFree', default: false })
  isTaxFree: boolean;

  @Column({ type: 'character varying', name: 'AdditionalField1', nullable: true })
  additionalField1: string | null;

  @Column({ type: 'character varying', name: 'AdditionalField2', nullable: true })
  additionalField2: string | null;

  @Column({ type: 'character varying', name: 'TaxId', nullable: true })
  taxId: string | null;

  @Column({ type: 'character varying', name: 'TaxTitle', nullable: true })
  taxTitle: string | null;

}