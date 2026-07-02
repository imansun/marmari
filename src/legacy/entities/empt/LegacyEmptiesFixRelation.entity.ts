import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmptiesFixRelation' })
export class LegacyEmptiesFixRelation {
  @PrimaryColumn({ type: 'bigint', name: 'EmptiesFixRelationID' })
  emptiesFixRelationID: number;

  @Column({ type: 'bigint', name: 'ContainerRef' })
  containerRef: number;

  @Column({ type: 'bigint', name: 'EmptiesRef' })
  emptiesRef: number;

  @Column({ type: 'integer', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'integer', name: 'Left', nullable: true })
  left: number | null;

  @Column({ type: 'integer', name: 'Right', nullable: true })
  right: number | null;

  @Column({ type: 'bigint', name: 'MainPartContainerRef', nullable: true })
  mainPartContainerRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}