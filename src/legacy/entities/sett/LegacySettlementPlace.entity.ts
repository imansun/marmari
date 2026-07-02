import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementPlace' })
export class LegacySettlementPlace {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementPlaceID' })
  settlementPlaceID: number;

  @Column({ type: 'bigint', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'integer', name: 'Left' })
  left: number;

  @Column({ type: 'integer', name: 'Right' })
  right: number;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'integer', name: 'StaticSettlementPlaceType', nullable: true })
  staticSettlementPlaceType: number | null;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

}