import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RequestKalaOk' })
export class LegacyRequestKalaOk {
  @PrimaryColumn({ type: 'bigint', name: 'RequestKalaOkID' })
  requestKalaOkID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'AnbarRef', nullable: true })
  anbarRef: number | null;

  @Column({ type: 'bigint', name: 'ModirRef', nullable: true })
  modirRef: number | null;

  @Column({ type: 'bigint', name: 'Modir_CompanyRef', nullable: true })
  modirCompanyref: number | null;

  @Column({ type: 'bigint', name: 'AdmiRef', nullable: true })
  admiRef: number | null;

  @Column({ type: 'bigint', name: 'Admin_ARef', nullable: true })
  adminAref: number | null;

  @Column({ type: 'bigint', name: 'StockClerkRef', nullable: true })
  stockClerkRef: number | null;

  @Column({ type: 'bigint', name: 'DoerRequestPersonnelRef', nullable: true })
  doerRequestPersonnelRef: number | null;

  @Column({ type: 'bigint', name: 'MalayManagerRef', nullable: true })
  malayManagerRef: number | null;

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

  @Column({ type: 'bigint', name: 'ProcurementAndSecureManagerRef', nullable: true })
  procurementAndSecureManagerRef: number | null;

  @Column({ type: 'bigint', name: 'FaniRef', nullable: true })
  faniRef: number | null;

  @Column({ type: 'bigint', name: 'SanayehRef', nullable: true })
  sanayehRef: number | null;

  @Column({ type: 'bigint', name: 'ForeigneRef', nullable: true })
  foreigneRef: number | null;

  @Column({ type: 'bigint', name: 'Mdyr2AttendantRef', nullable: true })
  mdyr2AttendantRef: number | null;

  @Column({ type: 'bigint', name: 'Edari_KharidRef', nullable: true })
  edariKharidref: number | null;

  @Column({ type: 'bigint', name: 'DomesticMalayManagerRef', nullable: true })
  domesticMalayManagerRef: number | null;

  @Column({ type: 'bigint', name: 'ForeignerMalayManagerRef', nullable: true })
  foreignerMalayManagerRef: number | null;

  @Column({ type: 'bigint', name: 'SuppliesSubjectMatterStockClerkRef', nullable: true })
  suppliesSubjectMatterStockClerkRef: number | null;

  @Column({ type: 'bigint', name: 'DieDecorationToolsScientificManagerRef', nullable: true })
  dieDecorationToolsScientificManagerRef: number | null;

  @Column({ type: 'bigint', name: 'PersonnelGoodsStockClerkRef', nullable: true })
  personnelGoodsStockClerkRef: number | null;

  @Column({ type: 'bigint', name: 'CustodialInventoryManagerRef', nullable: true })
  custodialInventoryManagerRef: number | null;

  @Column({ type: 'bigint', name: 'CustodialInventoryMalayManagerRef', nullable: true })
  custodialInventoryMalayManagerRef: number | null;

  @Column({ type: 'bigint', name: 'BuffetStockClerkRef', nullable: true })
  buffetStockClerkRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectStockClerkRef', nullable: true })
  projectStockClerkRef: number | null;

  @Column({ type: 'bigint', name: 'ModirFaniAmaniRef', nullable: true })
  modirFaniAmaniRef: number | null;

  @Column({ type: 'bigint', name: 'CustodialGoodsAntzamatRef', nullable: true })
  custodialGoodsAntzamatRef: number | null;

}