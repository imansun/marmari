import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Card' })
export class LegacyCard {
  @PrimaryColumn({ type: 'bigint', name: 'CardID' })
  cardID: number;

  @Column({ type: 'integer', name: 'TypeUID' })
  typeUID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'character varying', name: 'Password', nullable: true })
  password: string | null;

  @Column({ type: 'character varying', name: 'CVV2', nullable: true })
  cVV2: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'WrongPasswordCount' })
  wrongPasswordCount: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}