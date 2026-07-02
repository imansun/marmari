import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountingOperation' })
export class LegacyAccountingOperation {
  @PrimaryColumn({ type: 'bigint', name: 'AccountingOperationID' })
  accountingOperationID: number;

  @Column({ type: 'bigint', name: 'Number' })
  number: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Name_En', nullable: true })
  nameEn: string | null;

  @Column({ type: 'integer', name: 'OperationType' })
  operationType: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'integer', name: 'NormalORGuarantee', nullable: true })
  normalORGuarantee: number | null;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'integer', name: 'DLType4', nullable: true })
  dLType4: number | null;

  @Column({ type: 'integer', name: 'DLType5', nullable: true })
  dLType5: number | null;

  @Column({ type: 'integer', name: 'DLType6', nullable: true })
  dLType6: number | null;

  @Column({ type: 'integer', name: 'DLType7', nullable: true })
  dLType7: number | null;

  @Column({ type: 'integer', name: 'DLType8', nullable: true })
  dLType8: number | null;

  @Column({ type: 'integer', name: 'DLType9', nullable: true })
  dLType9: number | null;

  @Column({ type: 'integer', name: 'DLType10', nullable: true })
  dLType10: number | null;

  @Column({ type: 'integer', name: 'DLType11', nullable: true })
  dLType11: number | null;

  @Column({ type: 'integer', name: 'DLType12', nullable: true })
  dLType12: number | null;

  @Column({ type: 'integer', name: 'DLType13', nullable: true })
  dLType13: number | null;

  @Column({ type: 'integer', name: 'DLType14', nullable: true })
  dLType14: number | null;

  @Column({ type: 'integer', name: 'DLType15', nullable: true })
  dLType15: number | null;

  @Column({ type: 'integer', name: 'DLType16', nullable: true })
  dLType16: number | null;

  @Column({ type: 'integer', name: 'DLType17', nullable: true })
  dLType17: number | null;

  @Column({ type: 'integer', name: 'DLType18', nullable: true })
  dLType18: number | null;

  @Column({ type: 'integer', name: 'DLType19', nullable: true })
  dLType19: number | null;

  @Column({ type: 'integer', name: 'DLType20', nullable: true })
  dLType20: number | null;

  @Column({ type: 'character varying', name: 'DL4', nullable: true })
  dL4: string | null;

  @Column({ type: 'character varying', name: 'DL5', nullable: true })
  dL5: string | null;

  @Column({ type: 'character varying', name: 'DL6', nullable: true })
  dL6: string | null;

  @Column({ type: 'character varying', name: 'DL7', nullable: true })
  dL7: string | null;

  @Column({ type: 'character varying', name: 'DL8', nullable: true })
  dL8: string | null;

  @Column({ type: 'character varying', name: 'DL9', nullable: true })
  dL9: string | null;

  @Column({ type: 'character varying', name: 'DL10', nullable: true })
  dL10: string | null;

  @Column({ type: 'character varying', name: 'DL11', nullable: true })
  dL11: string | null;

  @Column({ type: 'character varying', name: 'DL12', nullable: true })
  dL12: string | null;

  @Column({ type: 'character varying', name: 'DL13', nullable: true })
  dL13: string | null;

  @Column({ type: 'character varying', name: 'DL14', nullable: true })
  dL14: string | null;

  @Column({ type: 'character varying', name: 'DL15', nullable: true })
  dL15: string | null;

  @Column({ type: 'character varying', name: 'DL16', nullable: true })
  dL16: string | null;

  @Column({ type: 'character varying', name: 'DL17', nullable: true })
  dL17: string | null;

  @Column({ type: 'character varying', name: 'DL18', nullable: true })
  dL18: string | null;

  @Column({ type: 'character varying', name: 'DL19', nullable: true })
  dL19: string | null;

  @Column({ type: 'character varying', name: 'DL20', nullable: true })
  dL20: string | null;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bigint', name: 'LedgerRef', nullable: true })
  ledgerRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}