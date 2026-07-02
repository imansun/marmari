import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationBatch' })
export class LegacyConfirmationBatch {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationBatchID' })
  confirmationBatchID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'integer', name: 'BatchCreationType', nullable: true })
  batchCreationType: number | null;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'numeric', name: 'Yield', nullable: true })
  yield: number | null;

  @Column({ type: 'numeric', name: 'Scrap', nullable: true })
  scrap: number | null;

  @Column({ type: 'numeric', name: 'Rework', nullable: true })
  rework: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDateTime', nullable: true })
  startDateTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDateTime', nullable: true })
  endDateTime: Date | null;

  @Column({ type: 'bigint', name: 'ConfirmationDetailRef', nullable: true })
  confirmationDetailRef: number | null;

  @Column({ type: 'integer', name: 'ConfirmationDetailType', nullable: true })
  confirmationDetailType: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'PartUnitRef', nullable: true })
  partUnitRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}