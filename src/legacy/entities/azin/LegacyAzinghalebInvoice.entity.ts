import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AzinghalebInvoice' })
export class LegacyAzinghalebInvoice {
  @PrimaryColumn({ type: 'bigint', name: 'AzinghalebInvoiceID' })
  azinghalebInvoiceID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'DemandMyrtleQuantity', nullable: true })
  demandMyrtleQuantity: number | null;

  @Column({ type: 'numeric', name: 'UaslhBreveNo', nullable: true })
  uaslhBreveNo: number | null;

  @Column({ type: 'bigint', name: 'CommendationNumRef', nullable: true })
  commendationNumRef: number | null;

  @Column({ type: 'character varying', name: 'CommendationGoodsCode', nullable: true })
  commendationGoodsCode: string | null;

  @Column({ type: 'character varying', name: 'CommendationGoodsName', nullable: true })
  commendationGoodsName: string | null;

  @Column({ type: 'bigint', name: 'CommendationEntryDateRef', nullable: true })
  commendationEntryDateRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CommendationEntryDate', nullable: true })
  commendationEntryDate: Date | null;

  @Column({ type: 'character varying', name: 'Commentss', nullable: true })
  commentss: string | null;

  @Column({ type: 'character varying', name: 'ProgramNo', nullable: true })
  programNo: string | null;

  @Column({ type: 'bigint', name: 'InstrumentConfirmFoldingMoney', nullable: true })
  instrumentConfirmFoldingMoney: number | null;

  @Column({ type: 'bigint', name: 'ProductRenderingFoldingMoney', nullable: true })
  productRenderingFoldingMoney: number | null;

  @Column({ type: 'integer', name: 'CommendationKind', nullable: true })
  commendationKind: number | null;

  @Column({ type: 'bigint', name: 'BlenderOutsideContractorServicesFoldingMoney', nullable: true })
  blenderOutsideContractorServicesFoldingMoney: number | null;

  @Column({ type: 'bigint', name: 'AdaptationInexistenceFormFoldingMoney', nullable: true })
  adaptationInexistenceFormFoldingMoney: number | null;

  @Column({ type: 'character varying', name: 'CustomerContactNo', nullable: true })
  customerContactNo: string | null;

  @Column({ type: 'character varying', name: 'DemandMyrtleDate', nullable: true })
  demandMyrtleDate: string | null;

  @Column({ type: 'character varying', name: 'ApplicantCompanyName', nullable: true })
  applicantCompanyName: string | null;

  @Column({ type: 'bigint', name: 'ProductNameReffRef', nullable: true })
  productNameReffRef: number | null;

  @Column({ type: 'character varying', name: 'ProductCodee', nullable: true })
  productCodee: string | null;

  @Column({ type: 'character varying', name: 'CameoNamee', nullable: true })
  cameoNamee: string | null;

  @Column({ type: 'numeric', name: 'AcquisitionMyrtleCameoQuantity', nullable: true })
  acquisitionMyrtleCameoQuantity: number | null;

  @Column({ type: 'numeric', name: 'CommendationAllQuantityy', nullable: true })
  commendationAllQuantityy: number | null;

  @Column({ type: 'character varying', name: 'CameoCodee', nullable: true })
  cameoCodee: string | null;

  @Column({ type: 'character varying', name: 'RenderingCod', nullable: true })
  renderingCod: string | null;

  @Column({ type: 'character varying', nullable: true })
  sanayeAnnunciation: string | null;

  @Column({ type: 'boolean', name: 'AnnotationAzafyDocumentationAndAsknsSayr', nullable: true })
  annotationAzafyDocumentationAndAsknsSayr: boolean | null;

  @Column({ type: 'character varying', name: 'PerIsDesigning', nullable: true })
  perIsDesigning: string | null;

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