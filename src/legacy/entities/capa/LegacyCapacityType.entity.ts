import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CapacityType' })
export class LegacyCapacityType {
  @PrimaryColumn({ type: 'bigint', name: 'CapacityTypeID' })
  capacityTypeID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'bigint', name: 'FactoryCalendarRef', nullable: true })
  factoryCalendarRef: number | null;

  @Column({ type: 'integer', name: 'CapacityGroup', nullable: true })
  capacityGroup: number | null;

}