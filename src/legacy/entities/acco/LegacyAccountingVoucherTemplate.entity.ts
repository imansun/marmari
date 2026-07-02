import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountingVoucherTemplate' })
export class LegacyAccountingVoucherTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'AccountingVoucherTemplateID' })
  accountingVoucherTemplateID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'SystemUniqueKey' })
  systemUniqueKey: string;

  @Column({ type: 'boolean', name: 'IsUserDefined' })
  isUserDefined: boolean;

  @Column({ type: 'character varying', name: 'EntityInfoKey' })
  entityInfoKey: string;

  @Column({ type: 'bigint', name: 'VoucherTypeRef' })
  voucherTypeRef: number;

  @Column({ type: 'character varying', name: 'DescriptionTemplate', nullable: true })
  descriptionTemplate: string | null;

  @Column({ type: 'character varying', name: 'DescriptionTemplateDisplayText', nullable: true })
  descriptionTemplateDisplayText: string | null;

  @Column({ type: 'boolean', name: 'IsCompound' })
  isCompound: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}