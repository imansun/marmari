import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StuffAmbulationPer' })
export class LegacyStuffAmbulationPer {
  @PrimaryColumn({ type: 'bigint', name: 'StuffAmbulationPerID' })
  stuffAmbulationPerID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'bigint', name: 'Employee1Ref', nullable: true })
  employee1Ref: number | null;

  @Column({ type: 'bigint', name: 'EmpPerCodeRef', nullable: true })
  empPerCodeRef: number | null;

  @Column({ type: 'character varying', name: 'NameFamil', nullable: true })
  nameFamil: string | null;

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

  @Column({ type: 'bigint', name: 'Karmnd2PerCodeRef', nullable: true })
  karmnd2PerCodeRef: number | null;

  @Column({ type: 'bigint', name: 'Mor_ok_RozRef', nullable: true })
  morOkRozref: number | null;

}