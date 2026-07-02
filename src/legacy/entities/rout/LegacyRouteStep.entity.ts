import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RouteStep' })
export class LegacyRouteStep {
  @PrimaryColumn({ type: 'bigint', name: 'RouteStepId' })
  routeStepId: number;

  @Column({ type: 'integer', name: 'RouteStepType' })
  routeStepType: number;

  @Column({ type: 'integer', name: 'StepNumber' })
  stepNumber: number;

  @Column({ type: 'bigint', name: 'RouteRef' })
  routeRef: number;

  @Column({ type: 'bigint', name: 'CustomerAddressRef' })
  customerAddressRef: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'numeric', name: 'DistanceFromPreviousStep', nullable: true })
  distanceFromPreviousStep: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'integer', name: 'TimeToReceive', nullable: true })
  timeToReceive: number | null;

  @Column({ type: 'integer', name: 'StopTime', nullable: true })
  stopTime: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}