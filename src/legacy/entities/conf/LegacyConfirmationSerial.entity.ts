import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationSerial' })
export class LegacyConfirmationSerial {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationSerialID' })
  confirmationSerialID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'integer', name: 'ConfirmationType' })
  confirmationType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}