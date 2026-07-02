import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingSequence' })
export class LegacyRoutingSequence {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingSequenceID' })
  routingSequenceID: number;

  @Column({ type: 'bigint', name: 'RoutingRef' })
  routingRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'BranchRoutingOperationUniqueID', nullable: true })
  branchRoutingOperationUniqueID: number | null;

  @Column({ type: 'integer', name: 'ReturnRoutingOperationUniqueID', nullable: true })
  returnRoutingOperationUniqueID: number | null;

  @Column({ type: 'numeric', name: 'FromLotSize', nullable: true })
  fromLotSize: number | null;

  @Column({ type: 'numeric', name: 'ToLotSize', nullable: true })
  toLotSize: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'numeric', name: 'BranchCoefficient', nullable: true })
  branchCoefficient: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}