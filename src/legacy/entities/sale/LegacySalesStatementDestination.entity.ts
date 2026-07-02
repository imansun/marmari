import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesStatementDestination' })
export class LegacySalesStatementDestination {
  @PrimaryColumn({ type: 'bigint', name: 'SalesStatementDestinationID' })
  salesStatementDestinationID: number;

  @Column({ type: 'bigint', name: 'SalesStatementRef' })
  salesStatementRef: number;

  @Column({ type: 'integer', name: 'DestinationType' })
  destinationType: number;

  @Column({ type: 'bigint', name: 'DestinationRef' })
  destinationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}