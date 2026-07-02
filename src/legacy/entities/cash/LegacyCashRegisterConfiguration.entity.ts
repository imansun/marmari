import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashRegisterConfiguration' })
export class LegacyCashRegisterConfiguration {
  @PrimaryColumn({ type: 'bigint', name: 'CashRegisterConfigurationID' })
  cashRegisterConfigurationID: number;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bigint', name: 'CashRegisterRef', nullable: true })
  cashRegisterRef: number | null;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'text', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}