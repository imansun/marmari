import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReworkOrderSerialRelated' })
export class LegacyReworkOrderSerialRelated {
  @PrimaryColumn({ type: 'bigint', name: 'ReworkOrderSerialRelatedID' })
  reworkOrderSerialRelatedID: number;

  @Column({ type: 'bigint', name: 'ReworkOrderRef' })
  reworkOrderRef: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'boolean', name: 'IsReserved' })
  isReserved: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}