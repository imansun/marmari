import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StuffAmbulationManagement' })
export class LegacyStuffAmbulationManagement {
  @PrimaryColumn({ type: 'bigint', name: 'StuffAmbulationManagementID' })
  stuffAmbulationManagementID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef', nullable: true })
  employeeRef: number | null;

  @Column({ type: 'bigint', name: 'FirstDoerConfirmRef', nullable: true })
  firstDoerConfirmRef: number | null;

  @Column({ type: 'bigint', name: 'SecondDoerConfirmRef', nullable: true })
  secondDoerConfirmRef: number | null;

  @Column({ type: 'bigint', name: 'ThirdDoerConfirmRef', nullable: true })
  thirdDoerConfirmRef: number | null;

  @Column({ type: 'bigint', name: 'FourthDoerConfirmRef', nullable: true })
  fourthDoerConfirmRef: number | null;

  @Column({ type: 'bigint', name: 'FifthDoerConfirmRef', nullable: true })
  fifthDoerConfirmRef: number | null;

  @Column({ type: 'character varying', name: 'DomesticNameAndName', nullable: true })
  domesticNameAndName: string | null;

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

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'PerCodeRef', nullable: true })
  perCodeRef: number | null;

  @Column({ type: 'integer', name: 'ServiceVector', nullable: true })
  serviceVector: number | null;

  @Column({ type: 'integer', name: 'NameRest', nullable: true })
  nameRest: number | null;

  @Column({ type: 'character varying', name: 'Stand', nullable: true })
  stand: string | null;

  @Column({ type: 'bigint', name: 'StandNameRef', nullable: true })
  standNameRef: number | null;

}