import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PromotionStructureFactor' })
export class LegacyPromotionStructureFactor {
  @PrimaryColumn({ type: 'bigint', name: 'PromotionStructureFactorID' })
  promotionStructureFactorID: number;

  @Column({ type: 'bigint', name: 'PromotionStructureRef' })
  promotionStructureRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'integer', name: 'AssignTypeCode' })
  assignTypeCode: number;

  @Column({ type: 'boolean', name: 'VisibleInForm' })
  visibleInForm: boolean;

  @Column({ type: 'boolean', name: 'Editable' })
  editable: boolean;

  @Column({ type: 'boolean', name: 'FinalResult' })
  finalResult: boolean;

  @Column({ type: 'character varying', name: 'DefaultValue' })
  defaultValue: string;

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

  @Column({ type: 'boolean', name: 'IsExecutionDate', default: false })
  isExecutionDate: boolean;

}