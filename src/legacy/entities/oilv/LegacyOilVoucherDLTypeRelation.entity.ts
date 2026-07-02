import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OilVoucherDLTypeRelation' })
export class LegacyOilVoucherDLTypeRelation {
  @PrimaryColumn({ type: 'bigint', name: 'OilVoucherDLTypeRelationID' })
  oilVoucherDLTypeRelationID: number;

  @Column({ type: 'bigint', name: 'OilVoucherTemplateItemRef' })
  oilVoucherTemplateItemRef: number;

  @Column({ type: 'integer', name: 'DLLevel' })
  dLLevel: number;

  @Column({ type: 'integer', name: 'OilField' })
  oilField: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}