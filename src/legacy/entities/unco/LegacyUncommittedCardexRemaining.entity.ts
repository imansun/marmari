import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UncommittedCardexRemaining' })
export class LegacyUncommittedCardexRemaining {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @Column({ type: 'bigint', name: 'CardexRemainingRef' })
  cardexRemainingRef: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'SecondUnitQuantity', nullable: true })
  secondUnitQuantity: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}