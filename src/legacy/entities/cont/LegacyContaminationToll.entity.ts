import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContaminationToll' })
export class LegacyContaminationToll {
  @PrimaryColumn({ type: 'bigint', name: 'ContaminationTollID' })
  contaminationTollID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'SaleTotalTransactionAmount' })
  saleTotalTransactionAmount: number;

  @Column({ type: 'numeric', name: 'SaleFinalAmount' })
  saleFinalAmount: number;

  @Column({ type: 'numeric', name: 'Percentage' })
  percentage: number;

  @Column({ type: 'numeric', name: 'TollAmount' })
  tollAmount: number;

  @Column({ type: 'bigint', name: 'VATStatementRef' })
  vATStatementRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}