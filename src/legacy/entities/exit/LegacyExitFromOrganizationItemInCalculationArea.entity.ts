import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExitFromOrganizationItemInCalculationArea' })
export class LegacyExitFromOrganizationItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'ExitFromOrganizationItemInCalculationAreaID' })
  exitFromOrganizationItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'ExitFromOrganizationItemRef' })
  exitFromOrganizationItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}