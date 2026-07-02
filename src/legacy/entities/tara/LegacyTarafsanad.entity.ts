import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'tarafsanad' })
export class LegacyTarafsanad {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherItemID' })
  voucherItemID: number;

  @PrimaryColumn({ type: 'integer', name: 'Number' })
  number: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Sequence' })
  sequence: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date' })
  date: Date | null;

  @PrimaryColumn({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @PrimaryColumn({ type: 'character varying', name: 'SLCode' })
  sLCode: string;

  @PrimaryColumn({ type: 'character varying' })
  dllevel4: string | null;

  @PrimaryColumn({ type: 'numeric', name: 'Debit' })
  debit: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Credit' })
  credit: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string;

}