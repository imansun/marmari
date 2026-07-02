import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HsePermitReq' })
export class LegacyHsePermitReq {
  @PrimaryColumn({ type: 'bigint', name: 'HsePermitReqID' })
  hsePermitReqID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'RequestNo' })
  requestNo: string;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'bigint', name: 'ReqOrganRef', nullable: true })
  reqOrganRef: number | null;

  @Column({ type: 'numeric', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'character varying', name: 'Adress', nullable: true })
  adress: string | null;

  @Column({ type: 'character varying', name: 'Work', nullable: true })
  work: string | null;

  @Column({ type: 'boolean', name: 'Weld', nullable: true })
  weld: boolean | null;

  @Column({ type: 'boolean', name: 'Cutter', nullable: true })
  cutter: boolean | null;

  @Column({ type: 'boolean', name: 'DameJewel', nullable: true })
  dameJewel: boolean | null;

  @Column({ type: 'boolean', name: 'Halal', nullable: true })
  halal: boolean | null;

  @Column({ type: 'boolean', name: 'Josh', nullable: true })
  josh: boolean | null;

  @Column({ type: 'boolean', name: 'Other', nullable: true })
  other: boolean | null;

  @Column({ type: 'bigint', name: 'Address2Ref', nullable: true })
  address2Ref: number | null;

  @Column({ type: 'boolean', name: 'Ertefah', nullable: true })
  ertefah: boolean | null;

  @Column({ type: 'boolean', name: 'Machin', nullable: true })
  machin: boolean | null;

  @Column({ type: 'boolean', name: 'Haffari', nullable: true })
  haffari: boolean | null;

  @Column({ type: 'boolean', name: 'Garsaghil', nullable: true })
  garsaghil: boolean | null;

  @Column({ type: 'boolean', name: 'ChemicalSubjectMatterAriesAndSomeplaceJabh', nullable: true })
  chemicalSubjectMatterAriesAndSomeplaceJabh: boolean | null;

  @Column({ type: 'boolean', name: 'Bargh', nullable: true })
  bargh: boolean | null;

  @Column({ type: 'boolean', name: 'Sayr', nullable: true })
  sayr: boolean | null;

  @Column({ type: 'boolean', name: 'Guise', nullable: true })
  guise: boolean | null;

  @Column({ type: 'boolean', name: 'Goshi', nullable: true })
  goshi: boolean | null;

  @Column({ type: 'boolean', name: 'Specs', nullable: true })
  specs: boolean | null;

  @Column({ type: 'boolean', name: 'Chevron', nullable: true })
  chevron: boolean | null;

  @Column({ type: 'boolean', name: 'Cap', nullable: true })
  cap: boolean | null;

  @Column({ type: 'boolean', name: 'WeldGuise', nullable: true })
  weldGuise: boolean | null;

  @Column({ type: 'boolean', name: 'Hefaz', nullable: true })
  hefaz: boolean | null;

  @Column({ type: 'boolean', name: 'Shyld', nullable: true })
  shyld: boolean | null;

  @Column({ type: 'boolean', name: 'Belt', nullable: true })
  belt: boolean | null;

  @Column({ type: 'boolean', name: 'Eshteal', nullable: true })
  eshteal: boolean | null;

  @Column({ type: 'boolean', name: 'Tahvieh', nullable: true })
  tahvieh: boolean | null;

  @Column({ type: 'boolean', name: 'AdequateIllumination', nullable: true })
  adequateIllumination: boolean | null;

  @Column({ type: 'boolean', name: 'Work_Hot', nullable: true })
  workHot: boolean | null;

  @Column({ type: 'boolean', name: 'AddressFireAndImmunityAccouterment', nullable: true })
  addressFireAndImmunityAccouterment: boolean | null;

  @Column({ type: 'boolean', name: 'Ertefah2', nullable: true })
  ertefah2: boolean | null;

  @Column({ type: 'boolean', name: 'Close_Faza', nullable: true })
  closeFaza: boolean | null;

  @Column({ type: 'boolean', name: 'Ashya', nullable: true })
  ashya: boolean | null;

  @Column({ type: 'bigint', name: 'AdminRef', nullable: true })
  adminRef: number | null;

  @Column({ type: 'bigint', name: 'StudioProjectManagerRef', nullable: true })
  studioProjectManagerRef: number | null;

  @Column({ type: 'bigint', name: 'HseRef', nullable: true })
  hseRef: number | null;

  @Column({ type: 'character varying', name: 'Last_Name', nullable: true })
  lastName: string | null;

  @Column({ type: 'boolean', name: 'MypzyrmRaBarushaymnMseulytkar', nullable: true })
  mypzyrmRaBarushaymnMseulytkar: boolean | null;

  @Column({ type: 'boolean', name: 'Nezarat', nullable: true })
  nezarat: boolean | null;

  @Column({ type: 'boolean', name: 'UseFardi', nullable: true })
  useFardi: boolean | null;

  @Column({ type: 'boolean', name: 'Eman2', nullable: true })
  eman2: boolean | null;

  @Column({ type: 'boolean', name: 'Start', nullable: true })
  start: boolean | null;

  @Column({ type: 'boolean', name: 'MahalKarEman', nullable: true })
  mahalKarEman: boolean | null;

  @Column({ type: 'boolean', name: 'WorkHot2', nullable: true })
  workHot2: boolean | null;

  @Column({ type: 'boolean', name: 'Bazdid', nullable: true })
  bazdid: boolean | null;

  @Column({ type: 'boolean', name: 'Lavazem_Fardi', nullable: true })
  lavazemFardi: boolean | null;

  @Column({ type: 'boolean', name: 'BashdMiSafePersonnelAcquisitionMyrtleAccouterment', nullable: true })
  bashdMiSafePersonnelAcquisitionMyrtleAccouterment: boolean | null;

  @Column({ type: 'boolean', name: 'Hozor_Per', nullable: true })
  hozorPer: boolean | null;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'character varying', nullable: true })
  manegment: string | null;

  @Column({ type: 'character varying', name: 'ImmunityControllerName', nullable: true })
  immunityControllerName: string | null;

  @Column({ type: 'character varying', name: 'CommentAll', nullable: true })
  commentAll: string | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'character varying', name: 'Trahyshdhtust', nullable: true })
  trahyshdhtust: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DateOk1', nullable: true })
  dateOk1: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'DateOk2', nullable: true })
  dateOk2: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'Dateok3', nullable: true })
  dateok3: Date | null;

  @Column({ type: 'bigint', name: 'TahvilRef', nullable: true })
  tahvilRef: number | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'Comments2', nullable: true })
  comments2: string | null;

  @Column({ type: 'character varying', name: 'Comments3', nullable: true })
  comments3: string | null;

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

  @Column({ type: 'bigint', name: 'ContractorRequestNoRef', nullable: true })
  contractorRequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'ContractorName', nullable: true })
  contractorName: string | null;

}