import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TempPacConfirmation' })
export class LegacyTempPacConfirmation {
  @PrimaryColumn({ type: 'bigint', name: 'TempPacConfirmationID' })
  tempPacConfirmationID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderOperationRef' })
  productionOrderOperationRef: number;

  @Column({ type: 'numeric', name: 'Yield' })
  yield: number;

  @Column({ type: 'numeric', name: 'Scrap', nullable: true })
  scrap: number | null;

  @Column({ type: 'bigint', name: 'ConfirmationID' })
  confirmationID: number;

  @Column({ type: 'character varying', name: 'ConfirmationNumber', nullable: true })
  confirmationNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmationDate' })
  confirmationDate: Date;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'DissimilarScrap', nullable: true })
  dissimilarScrap: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}