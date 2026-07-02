import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessKPIActivityRangeItem' })
export class LegacyProcessKPIActivityRangeItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessKPIActivityRangeItemID' })
  processKPIActivityRangeItemID: number;

  @Column({ type: 'bigint', name: 'ProcessKPIActivityRangeRef' })
  processKPIActivityRangeRef: number;

  @Column({ type: 'bigint', name: 'StartProcessDefinitionVersionRef' })
  startProcessDefinitionVersionRef: number;

  @Column({ type: 'bigint', name: 'EndProcessDefinitionVersionRef' })
  endProcessDefinitionVersionRef: number;

  @Column({ type: 'bigint', name: 'RootProcessDefinitionVersionRef' })
  rootProcessDefinitionVersionRef: number;

  @Column({ type: 'character varying', name: 'StartActivityId' })
  startActivityId: string;

  @Column({ type: 'character varying', name: 'StartActivityName' })
  startActivityName: string;

  @Column({ type: 'character varying', name: 'EndActivityId' })
  endActivityId: string;

  @Column({ type: 'character varying', name: 'EndActivityName' })
  endActivityName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}