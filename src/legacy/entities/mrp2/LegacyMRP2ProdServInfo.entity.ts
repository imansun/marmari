import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MRP2ProdServInfo' })
export class LegacyMRP2ProdServInfo {
  @PrimaryColumn({ type: 'bigint', name: 'MRP2ProdServInfoID' })
  mRP2ProdServInfoID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'bigint', name: 'CustomerCommendationNoRef', nullable: true })
  customerCommendationNoRef: number | null;

  @Column({ type: 'character varying', name: 'ProgramNo', nullable: true })
  programNo: string | null;

  @Column({ type: 'character varying', name: 'CommenKalaName', nullable: true })
  commenKalaName: string | null;

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

  @Column({ type: 'bigint', name: 'ServicesProcessEarmarkRef', nullable: true })
  servicesProcessEarmarkRef: number | null;

  @Column({ type: 'character varying', name: 'ServicesProcessAmlyat', nullable: true })
  servicesProcessAmlyat: string | null;

  @Column({ type: 'character varying', name: 'TractCode', nullable: true })
  tractCode: string | null;

  @Column({ type: 'numeric', name: 'ServicesBehestQuantity', nullable: true })
  servicesBehestQuantity: number | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'character varying', name: 'CustomerContactNo', nullable: true })
  customerContactNo: string | null;

  @Column({ type: 'character varying', name: 'DonorCommendationName', nullable: true })
  donorCommendationName: string | null;

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