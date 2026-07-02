import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchasingDepartment' })
export class LegacyPurchasingDepartment {
  @PrimaryColumn({ type: 'bigint', name: 'PurchasingDepartmentID' })
  purchasingDepartmentID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'ManagerRef', nullable: true })
  managerRef: number | null;

  @Column({ type: 'bigint', name: 'SupervisorRef', nullable: true })
  supervisorRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}