import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BomPhantom' })
export class LegacyBomPhantom {
  @PrimaryColumn({ type: 'bigint', name: 'BomPhantomID' })
  bomPhantomID: number;

  @Column({ type: 'bigint', name: 'BomRef' })
  bomRef: number;

  @Column({ type: 'bigint', name: 'ParentBomRef' })
  parentBomRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}