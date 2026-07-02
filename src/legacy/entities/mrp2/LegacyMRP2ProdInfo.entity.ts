import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MRP2ProdInfo' })
export class LegacyMRP2ProdInfo {
  @PrimaryColumn({ type: 'bigint', name: 'MRP2ProdInfoID' })
  mRP2ProdInfoID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'numeric', name: 'DsturQuant', nullable: true })
  dsturQuant: number | null;

  @Column({ type: 'character varying', name: 'FrameworkComments', nullable: true })
  frameworkComments: string | null;

  @Column({ type: 'bigint', name: 'CustCommenNoRef', nullable: true })
  custCommenNoRef: number | null;

  @Column({ type: 'character varying', name: 'ProgramNo', nullable: true })
  programNo: string | null;

  @Column({ type: 'character varying', name: 'CommendationGoodsName', nullable: true })
  commendationGoodsName: string | null;

  @Column({ type: 'character varying', name: 'CommendationGoodsCode', nullable: true })
  commendationGoodsCode: string | null;

  @Column({ type: 'character varying', name: 'CommendationKind', nullable: true })
  commendationKind: string | null;

  @Column({ type: 'character varying', name: 'RenderingCode', nullable: true })
  renderingCode: string | null;

  @Column({ type: 'character varying', name: 'CameoName', nullable: true })
  cameoName: string | null;

  @Column({ type: 'character varying', name: 'CameoCode', nullable: true })
  cameoCode: string | null;

  @Column({ type: 'bigint', name: 'ProductionProcessEarmarkRef', nullable: true })
  productionProcessEarmarkRef: number | null;

  @Column({ type: 'character varying', name: 'TractCode', nullable: true })
  tractCode: string | null;

  @Column({ type: 'character varying', name: 'ProductionProcessAmlyat', nullable: true })
  productionProcessAmlyat: string | null;

  @Column({ type: 'character varying', name: 'CustomerContactNo', nullable: true })
  customerContactNo: string | null;

  @Column({ type: 'character varying', name: 'DonorCommendationName', nullable: true })
  donorCommendationName: string | null;

  @Column({ type: 'bigint', name: 'ServicesProcessEarmarkRef', nullable: true })
  servicesProcessEarmarkRef: number | null;

  @Column({ type: 'character varying', name: 'ServicesTractCode', nullable: true })
  servicesTractCode: string | null;

  @Column({ type: 'character varying', name: 'ServicesProcessAmlyat', nullable: true })
  servicesProcessAmlyat: string | null;

  @Column({ type: 'numeric', name: 'ServicesBehestQuantity', nullable: true })
  servicesBehestQuantity: number | null;

  @Column({ type: 'character varying', name: 'ServicesProcessComments', nullable: true })
  servicesProcessComments: string | null;

  @Column({ type: 'character varying', name: 'ServicesRenderingCode', nullable: true })
  servicesRenderingCode: string | null;

  @Column({ type: 'integer', name: 'RepresentativeTractCode', nullable: true })
  representativeTractCode: number | null;

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