import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RequestAmaniKala' })
export class LegacyRequestAmaniKala {
  @PrimaryColumn({ type: 'bigint', name: 'RequestAmaniKalaID' })
  requestAmaniKalaID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'RequestNo' })
  requestNo: string;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'bigint', name: 'ContraryAbutmentRef', nullable: true })
  contraryAbutmentRef: number | null;

  @Column({ type: 'bigint', name: 'LiveDeliveryRef', nullable: true })
  liveDeliveryRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bigint', name: 'EgressLiableRef', nullable: true })
  egressLiableRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'GoodsEgressDate', nullable: true })
  goodsEgressDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'GoodsBackApproximateDate', nullable: true })
  goodsBackApproximateDate: Date | null;

  @Column({ type: 'boolean', name: 'BrmygrddCompanyUntoGoods', nullable: true })
  brmygrddCompanyUntoGoods: boolean | null;

  @Column({ type: 'integer', name: 'EmissionAgument', nullable: true })
  emissionAgument: number | null;

  @Column({ type: 'character varying', name: 'GoodsCharInexistenceAgument', nullable: true })
  goodsCharInexistenceAgument: string | null;

  @Column({ type: 'character varying', name: 'SelectAgument', nullable: true })
  selectAgument: string | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'Trahyshdhtust', nullable: true })
  trahyshdhtust: string | null;

  @Column({ type: 'bigint', name: 'FirstCoupling', nullable: true })
  firstCoupling: number | null;

  @Column({ type: 'bigint', name: 'SecondCoupling', nullable: true })
  secondCoupling: number | null;

  @Column({ type: 'character varying', name: 'ManagerComments', nullable: true })
  managerComments: string | null;

  @Column({ type: 'character varying', name: 'FactorManagerComments', nullable: true })
  factorManagerComments: string | null;

  @Column({ type: 'character varying', name: 'MalayManagerComments', nullable: true })
  malayManagerComments: string | null;

  @Column({ type: 'character varying', name: 'SeniorManagementComments', nullable: true })
  seniorManagementComments: string | null;

  @Column({ type: 'bigint', name: 'ContractorNoRef', nullable: true })
  contractorNoRef: number | null;

  @Column({ type: 'character varying', name: 'ContractorName', nullable: true })
  contractorName: string | null;

  @Column({ type: 'boolean', name: 'GroupCompanyUntoEmission', nullable: true })
  groupCompanyUntoEmission: boolean | null;

  @Column({ type: 'bigint', name: 'GroupCompanyNameRef', nullable: true })
  groupCompanyNameRef: number | null;

  @Column({ type: 'character varying', name: 'Tulyd1ya2', nullable: true })
  tulyd1ya2: string | null;

  @Column({ type: 'integer', name: 'GoodsEgressGoodsAccession', nullable: true })
  goodsEgressGoodsAccession: number | null;

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

  @Column({ type: 'boolean', name: 'MdyrytaalBhtayydDemand', nullable: true })
  mdyrytaalBhtayydDemand: boolean | null;

  @Column({ type: 'bigint', name: 'MojavezNoRef', nullable: true })
  mojavezNoRef: number | null;

}