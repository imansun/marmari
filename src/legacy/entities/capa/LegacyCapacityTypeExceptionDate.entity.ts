import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CapacityTypeExceptionDate' })
export class LegacyCapacityTypeExceptionDate {
  @PrimaryColumn({ type: 'bigint', name: 'CapacityTypeExceptionDateID' })
  capacityTypeExceptionDateID: number;

  @Column({ type: 'bigint', name: 'CapacityTypeRef' })
  capacityTypeRef: number;

  @Column({ type: 'integer', name: 'ExceptionDateType' })
  exceptionDateType: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}