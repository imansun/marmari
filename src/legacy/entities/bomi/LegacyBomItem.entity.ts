import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BomItem' })
export class LegacyBomItem {
  @PrimaryColumn({ type: 'bigint', name: 'BomItemID' })
  bomItemID: number;

  @Column({ type: 'bigint', name: 'BomRef' })
  bomRef: number;

  @Column({ type: 'bigint', name: 'ParentBomItemRef', nullable: true })
  parentBomItemRef: number | null;

  @Column({ type: 'integer', name: 'Left' })
  left: number;

  @Column({ type: 'integer', name: 'Right' })
  right: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}