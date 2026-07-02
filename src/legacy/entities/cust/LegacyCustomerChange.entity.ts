import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerChange' })
export class LegacyCustomerChange {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerChangeID' })
  customerChangeID: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef', nullable: true })
  brokerRef: number | null;

  @Column({ type: 'bigint', name: 'SalesOfficeRef', nullable: true })
  salesOfficeRef: number | null;

  @Column({ type: 'bigint', name: 'ChangesetID' })
  changesetID: number;

  @Column({ type: 'timestamp without time zone', name: 'ChangeDate' })
  changeDate: Date;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'character varying', name: 'EntityTitle', nullable: true })
  entityTitle: string | null;

  @Column({ type: 'bigint', name: 'EntityRef', nullable: true })
  entityRef: number | null;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}