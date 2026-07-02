import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationRelatedDLType' })
export class LegacyCompensationRelatedDLType {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationRelatedDLTypeID' })
  compensationRelatedDLTypeID: number;

  @Column({ type: 'bigint', name: 'DLTypeRef' })
  dLTypeRef: number;

  @Column({ type: 'boolean', name: 'Mandatory' })
  mandatory: boolean;

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

  @Column({ type: 'boolean', name: 'ShowInEmployeeFilter', default: false })
  showInEmployeeFilter: boolean;

}