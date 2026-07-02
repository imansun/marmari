import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldPrinter' })
export class LegacyHandheldPrinter {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldPrinterID' })
  handheldPrinterID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'PrintFormat' })
  printFormat: string;

  @Column({ type: 'boolean', name: 'MultiPage' })
  multiPage: boolean;

  @Column({ type: 'integer', name: 'MaxPageCount', nullable: true })
  maxPageCount: number | null;

}