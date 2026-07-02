import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BrokerService' })
export class LegacyBrokerService {
  @PrimaryColumn({ type: 'bigint', name: 'BrokerServiceID' })
  brokerServiceID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'Wage' })
  wage: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'numeric', name: 'MaxWage', nullable: true })
  maxWage: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'UserCanChangeWage' })
  userCanChangeWage: boolean;

  @Column({ type: 'boolean', name: 'Temp', nullable: true })
  temp: boolean | null;

  @Column({ type: 'smallint', name: 'SalesDocumentType' })
  salesDocumentType: number;

}