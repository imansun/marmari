import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingBomAssignment' })
export class LegacyRoutingBomAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingBomAssignmentID' })
  routingBomAssignmentID: number;

  @Column({ type: 'bigint', name: 'BomRef' })
  bomRef: number;

  @Column({ type: 'bigint', name: 'RoutingProductRef' })
  routingProductRef: number;

  @Column({ type: 'boolean', name: 'Completed' })
  completed: boolean;

  @Column({ type: 'boolean', name: 'AutomaticReservation' })
  automaticReservation: boolean;

  @Column({ type: 'boolean', name: 'AutomaticIssuePermit' })
  automaticIssuePermit: boolean;

  @Column({ type: 'boolean', name: 'AutomaticDirect' })
  automaticDirect: boolean;

  @Column({ type: 'boolean', name: 'AutomaticDirectStateChange' })
  automaticDirectStateChange: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}