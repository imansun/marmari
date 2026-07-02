import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PotentAmbulationDuringCompanyAllKnndganConfirm' })
export class LegacyPotentAmbulationDuringCompanyAllKnndganConfirm {
  @PrimaryColumn({ type: 'bigint', name: 'PotentAmbulationDuringCompanyAllKnndganConfirmID' })
  potentAmbulationDuringCompanyAllKnndganConfirmID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'OK_MamorRef', nullable: true })
  oKMamorref: number | null;

  @Column({ type: 'bigint', name: 'Edari_OkRef', nullable: true })
  edariOkref: number | null;

  @Column({ type: 'bigint', name: 'Sanaye_OkRef', nullable: true })
  sanayeOkref: number | null;

  @Column({ type: 'bigint', name: 'Entezamat_OkRef', nullable: true })
  entezamatOkref: number | null;

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

  @Column({ type: 'bigint', name: 'Ok_EzaRef', nullable: true })
  okEzaref: number | null;

}