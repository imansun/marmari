import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DLTypeArrangementItem' })
export class LegacyDLTypeArrangementItem {
  @PrimaryColumn({ type: 'bigint', name: 'DLTypeArrangementItemID' })
  dLTypeArrangementItemID: number;

  @Column({ type: 'bigint', name: 'DLTypeArrangementRef' })
  dLTypeArrangementRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bigint', name: 'DLTypeRef' })
  dLTypeRef: number;

  @Column({ type: 'boolean', name: 'IsOptional' })
  isOptional: boolean;

  @Column({ type: 'bigint', name: 'DefaultDLRef', nullable: true })
  defaultDLRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}