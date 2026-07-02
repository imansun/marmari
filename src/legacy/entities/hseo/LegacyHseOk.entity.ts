import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HseOk' })
export class LegacyHseOk {
  @PrimaryColumn({ type: 'bigint', name: 'HseOkID' })
  hseOkID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Ok_HseRef', nullable: true })
  okHseref: number | null;

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

  @Column({ type: 'bigint', name: 'ConsumptionEngineeringRef', nullable: true })
  consumptionEngineeringRef: number | null;

  @Column({ type: 'bigint', name: 'CustodialRef', nullable: true })
  custodialRef: number | null;

  @Column({ type: 'bigint', name: 'ModirMaliRef', nullable: true })
  modirMaliRef: number | null;

  @Column({ type: 'bigint', name: 'Tulyd1ManagerRef', nullable: true })
  tulyd1ManagerRef: number | null;

  @Column({ type: 'bigint', name: 'Tulyd2ManagerRef', nullable: true })
  tulyd2ManagerRef: number | null;

  @Column({ type: 'bigint', name: 'GroupStellarManagementRef', nullable: true })
  groupStellarManagementRef: number | null;

  @Column({ type: 'bigint', name: 'SaynaFactorManagerRef', nullable: true })
  saynaFactorManagerRef: number | null;

}