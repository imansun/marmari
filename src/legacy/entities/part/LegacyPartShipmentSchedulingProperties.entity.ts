import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartShipmentSchedulingProperties' })
export class LegacyPartShipmentSchedulingProperties {
  @PrimaryColumn({ type: 'bigint', name: 'PartShipmentSchedulingPropertiesID' })
  partShipmentSchedulingPropertiesID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'DefaultUnitRef', nullable: true })
  defaultUnitRef: number | null;

  @Column({ type: 'bigint', name: 'DefaultEntityUnitRef', nullable: true })
  defaultEntityUnitRef: number | null;

  @Column({ type: 'numeric', name: 'SchedulingExcessToDeliveryCapacity', nullable: true })
  schedulingExcessToDeliveryCapacity: number | null;

  @Column({ type: 'numeric', name: 'MinSchedulableValue', nullable: true })
  minSchedulableValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}