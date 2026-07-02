import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssignedSerial' })
export class LegacyAssignedSerial {
  @PrimaryColumn({ type: 'bigint', name: 'AssignedSerialID' })
  assignedSerialID: number;

  @Column({ type: 'bigint', name: 'NumberingMethodRef' })
  numberingMethodRef: number;

  @Column({ type: 'bigint', name: 'SerialPoolRef' })
  serialPoolRef: number;

  @Column({ type: 'bigint', name: 'SecretariatRef', nullable: true })
  secretariatRef: number | null;

  @Column({ type: 'bigint', name: 'NumberingReservationRef', nullable: true })
  numberingReservationRef: number | null;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef', nullable: true })
  entityRef: number | null;

  @Column({ type: 'bigint', name: 'IssuerCorrespondentRef', nullable: true })
  issuerCorrespondentRef: number | null;

  @Column({ type: 'bigint', name: 'Value' })
  value: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'integer', name: 'CreationType' })
  creationType: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}