import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartDisplayInformation' })
export class LegacyPartDisplayInformation {
  @PrimaryColumn({ type: 'bigint', name: 'PartDisplayInformationID' })
  partDisplayInformationID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'Position' })
  position: number;

  @Column({ type: 'character varying', name: 'Filter', nullable: true })
  filter: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}