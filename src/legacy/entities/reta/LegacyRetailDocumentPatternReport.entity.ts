import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailDocumentPatternReport' })
export class LegacyRetailDocumentPatternReport {
  @PrimaryColumn({ type: 'bigint', name: 'RetailDocumentPatternReportID' })
  retailDocumentPatternReportID: number;

  @Column({ type: 'bigint', name: 'RetailDocumentPatternRef' })
  retailDocumentPatternRef: number;

  @Column({ type: 'bigint', name: 'PrintLayoutRef' })
  printLayoutRef: number;

  @Column({ type: 'integer', name: 'RetailDocumentStatus', nullable: true })
  retailDocumentStatus: number | null;

  @Column({ type: 'boolean', name: 'SendToPrinter' })
  sendToPrinter: boolean;

  @Column({ type: 'integer', name: 'PrintCount', nullable: true })
  printCount: number | null;

  @Column({ type: 'boolean', name: 'ReprintAbility' })
  reprintAbility: boolean;

  @Column({ type: 'boolean', name: 'ConfirmationIsRequired', nullable: true })
  confirmationIsRequired: boolean | null;

  @Column({ type: 'integer', name: 'Printer', nullable: true })
  printer: number | null;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'RetailDocumentPatternType' })
  retailDocumentPatternType: number;

  @Column({ type: 'boolean', name: 'PrinterDispatchByInteriorSection', default: false })
  printerDispatchByInteriorSection: boolean;

}