import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineGatewayUserAccountSpecification' })
export class LegacyOnlineGatewayUserAccountSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineGatewayUserAccountSpecificationID' })
  onlineGatewayUserAccountSpecificationID: number;

  @Column({ type: 'bigint', name: 'OnlineGatewayUserAccountRef' })
  onlineGatewayUserAccountRef: number;

  @Column({ type: 'character varying', name: 'SpecificationKey' })
  specificationKey: string;

  @Column({ type: 'character varying', name: 'SpecificationName' })
  specificationName: string;

  @Column({ type: 'character varying', name: 'SpecificationValue', nullable: true })
  specificationValue: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}