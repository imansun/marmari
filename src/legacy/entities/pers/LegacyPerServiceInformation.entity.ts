import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerServiceInformation' })
export class LegacyPerServiceInformation {
  @PrimaryColumn({ type: 'bigint', name: 'PerServiceInformationID' })
  perServiceInformationID: number;

  @Column({ type: 'bigint', nullable: true })
  namefamilyRef: number | null;

  @Column({ type: 'character varying', name: 'NationalCode', nullable: true })
  nationalCode: string | null;

  @Column({ type: 'character varying', name: 'PhoneNo', nullable: true })
  phoneNo: string | null;

  @Column({ type: 'character varying', name: 'Address', nullable: true })
  address: string | null;

  @Column({ type: 'integer', name: 'MachineKind', nullable: true })
  machineKind: number | null;

  @Column({ type: 'numeric', name: 'Sal', nullable: true })
  sal: number | null;

  @Column({ type: 'character varying', name: 'MachineMannequin', nullable: true })
  machineMannequin: string | null;

  @Column({ type: 'character varying', name: 'Valence', nullable: true })
  valence: string | null;

  @Column({ type: 'integer', name: 'ServiceVector', nullable: true })
  serviceVector: number | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'Trahyshdhtust', nullable: true })
  trahyshdhtust: string | null;

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