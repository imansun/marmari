import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProformaItemDestination' })
export class LegacyProformaItemDestination {
  @PrimaryColumn({ type: 'bigint', name: 'ProformaItemDestinationID' })
  proformaItemDestinationID: number;

  @Column({ type: 'bigint', name: 'ProformaItemRef' })
  proformaItemRef: number;

  @Column({ type: 'bigint', name: 'DestinationRef' })
  destinationRef: number;

  @Column({ type: 'integer', name: 'DestinationType' })
  destinationType: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}