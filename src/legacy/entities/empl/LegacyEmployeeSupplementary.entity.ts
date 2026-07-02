import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeSupplementary' })
export class LegacyEmployeeSupplementary {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeSupplementaryID' })
  employeeSupplementaryID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bytea', name: 'Photo', nullable: true })
  photo: Buffer | null;

  @Column({ type: 'bytea', name: 'Signature', nullable: true })
  signature: Buffer | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}