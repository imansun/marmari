import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AzinghalebInvoiceSubjectMatterConsumption' })
export class LegacyAzinghalebInvoiceSubjectMatterConsumption {
  @PrimaryColumn({ type: 'bigint', name: 'AzinghalebInvoiceSubjectMatterConsumptionID' })
  azinghalebInvoiceSubjectMatterConsumptionID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Number' })
  number: number;

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