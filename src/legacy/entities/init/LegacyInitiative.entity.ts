import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Initiative' })
export class LegacyInitiative {
  @PrimaryColumn({ type: 'bigint', name: 'InitiativeID' })
  initiativeID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'DueDate' })
  dueDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'KeyResultRef', nullable: true })
  keyResultRef: number | null;

  @Column({ type: 'bigint', name: 'ExpectationRef', nullable: true })
  expectationRef: number | null;

}