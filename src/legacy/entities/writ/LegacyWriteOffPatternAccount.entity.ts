import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WriteOffPatternAccount' })
export class LegacyWriteOffPatternAccount {
  @PrimaryColumn({ type: 'bigint', name: 'WriteOffPatternAccountID' })
  writeOffPatternAccountID: number;

  @Column({ type: 'bigint', name: 'WriteOffPatternRef' })
  writeOffPatternRef: number;

  @Column({ type: 'bigint', name: 'DebitSLRef' })
  debitSLRef: number;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef4', nullable: true })
  debitDLTypeRef4: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel4', nullable: true })
  debitDLLevel4: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef5', nullable: true })
  debitDLTypeRef5: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel5', nullable: true })
  debitDLLevel5: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef6', nullable: true })
  debitDLTypeRef6: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel6', nullable: true })
  debitDLLevel6: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef7', nullable: true })
  debitDLTypeRef7: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel7', nullable: true })
  debitDLLevel7: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef8', nullable: true })
  debitDLTypeRef8: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel8', nullable: true })
  debitDLLevel8: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef9', nullable: true })
  debitDLTypeRef9: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel9', nullable: true })
  debitDLLevel9: string | null;

  @Column({ type: 'bigint', name: 'CreditSLRef' })
  creditSLRef: number;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef4', nullable: true })
  creditDLTypeRef4: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel4', nullable: true })
  creditDLLevel4: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef5', nullable: true })
  creditDLTypeRef5: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel5', nullable: true })
  creditDLLevel5: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef6', nullable: true })
  creditDLTypeRef6: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel6', nullable: true })
  creditDLLevel6: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef7', nullable: true })
  creditDLTypeRef7: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel7', nullable: true })
  creditDLLevel7: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef8', nullable: true })
  creditDLTypeRef8: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel8', nullable: true })
  creditDLLevel8: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef9', nullable: true })
  creditDLTypeRef9: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel9', nullable: true })
  creditDLLevel9: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef10', nullable: true })
  creditDLTypeRef10: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel10', nullable: true })
  creditDLLevel10: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef11', nullable: true })
  creditDLTypeRef11: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel11', nullable: true })
  creditDLLevel11: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef12', nullable: true })
  creditDLTypeRef12: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel12', nullable: true })
  creditDLLevel12: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef13', nullable: true })
  creditDLTypeRef13: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel13', nullable: true })
  creditDLLevel13: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef14', nullable: true })
  creditDLTypeRef14: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel14', nullable: true })
  creditDLLevel14: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef15', nullable: true })
  creditDLTypeRef15: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel15', nullable: true })
  creditDLLevel15: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef16', nullable: true })
  creditDLTypeRef16: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel16', nullable: true })
  creditDLLevel16: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef17', nullable: true })
  creditDLTypeRef17: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel17', nullable: true })
  creditDLLevel17: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef18', nullable: true })
  creditDLTypeRef18: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel18', nullable: true })
  creditDLLevel18: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef19', nullable: true })
  creditDLTypeRef19: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel19', nullable: true })
  creditDLLevel19: string | null;

  @Column({ type: 'bigint', name: 'CreditDLTypeRef20', nullable: true })
  creditDLTypeRef20: number | null;

  @Column({ type: 'character varying', name: 'CreditDLLevel20', nullable: true })
  creditDLLevel20: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef10', nullable: true })
  debitDLTypeRef10: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel10', nullable: true })
  debitDLLevel10: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef11', nullable: true })
  debitDLTypeRef11: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel11', nullable: true })
  debitDLLevel11: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef12', nullable: true })
  debitDLTypeRef12: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel12', nullable: true })
  debitDLLevel12: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef13', nullable: true })
  debitDLTypeRef13: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel13', nullable: true })
  debitDLLevel13: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef14', nullable: true })
  debitDLTypeRef14: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel14', nullable: true })
  debitDLLevel14: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef15', nullable: true })
  debitDLTypeRef15: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel15', nullable: true })
  debitDLLevel15: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef16', nullable: true })
  debitDLTypeRef16: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel16', nullable: true })
  debitDLLevel16: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef17', nullable: true })
  debitDLTypeRef17: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel17', nullable: true })
  debitDLLevel17: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef18', nullable: true })
  debitDLTypeRef18: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel18', nullable: true })
  debitDLLevel18: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef19', nullable: true })
  debitDLTypeRef19: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel19', nullable: true })
  debitDLLevel19: string | null;

  @Column({ type: 'bigint', name: 'DebitDLTypeRef20', nullable: true })
  debitDLTypeRef20: number | null;

  @Column({ type: 'character varying', name: 'DebitDLLevel20', nullable: true })
  debitDLLevel20: string | null;

}