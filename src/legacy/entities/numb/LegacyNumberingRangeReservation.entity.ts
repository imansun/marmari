import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NumberingRangeReservation' })
export class LegacyNumberingRangeReservation {
  @PrimaryColumn({ type: 'bigint', name: 'NumberingRangeReservationID' })
  numberingRangeReservationID: number;

  @Column({ type: 'bigint', name: 'NumberingMethodRangeRef' })
  numberingMethodRangeRef: number;

  @Column({ type: 'character varying', name: 'DomainKey' })
  domainKey: string;

  @Column({ type: 'bigint', name: 'ReservedSerial' })
  reservedSerial: number;

}