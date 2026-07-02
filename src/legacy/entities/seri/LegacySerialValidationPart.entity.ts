import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialValidationPart' })
export class LegacySerialValidationPart {
  @PrimaryColumn({ type: 'bigint', name: 'SerialValidationPartID' })
  serialValidationPartID: number;

  @Column({ type: 'bigint', name: 'SerialValidationRef' })
  serialValidationRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'integer', name: 'ValidationType' })
  validationType: number;

  @Column({ type: 'boolean', name: 'AssignedPartSerialExistance' })
  assignedPartSerialExistance: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}