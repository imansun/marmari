import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReceivableCollateralAccountingInformation' })
export class LegacyReceivableCollateralAccountingInformation {
  @PrimaryColumn({ type: 'bigint', name: 'ReceivableCollateralAccountingInformationID' })
  receivableCollateralAccountingInformationID: number;

  @Column({ type: 'bigint', name: 'ReceivableCollateralRef' })
  receivableCollateralRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'SLCode', nullable: true })
  sLCode: string | null;

  @Column({ type: 'character varying', name: 'DLLevel4', nullable: true })
  dLLevel4: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5', nullable: true })
  dLLevel5: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6', nullable: true })
  dLLevel6: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7', nullable: true })
  dLLevel7: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8', nullable: true })
  dLLevel8: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9', nullable: true })
  dLLevel9: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}