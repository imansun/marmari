import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessDeliveryTagAssignment' })
export class LegacyProcessDeliveryTagAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessDeliveryTagAssignmentID' })
  processDeliveryTagAssignmentID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'DeliveryRef' })
  deliveryRef: number;

  @Column({ type: 'bigint', name: 'TagRef' })
  tagRef: number;

}