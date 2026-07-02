import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceProductUnit' })
export class LegacySelfServiceProductUnit {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceProductUnitID' })
  selfServiceProductUnitID: number;

  @Column({ type: 'bigint', name: 'SelfServiceProductRef' })
  selfServiceProductRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}