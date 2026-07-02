import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkbookStructureViewConfig' })
export class LegacyWorkbookStructureViewConfig {
  @PrimaryColumn({ type: 'bigint', name: 'WorkbookStructureViewConfigID' })
  workbookStructureViewConfigID: number;

  @Column({ type: 'bigint', name: 'WorkbookStructureRef' })
  workbookStructureRef: number;

  @Column({ type: 'bigint', name: 'PhraseRef' })
  phraseRef: number;

  @Column({ type: 'numeric', name: 'MinGreen', nullable: true })
  minGreen: number | null;

  @Column({ type: 'numeric', name: 'MaxGreen', nullable: true })
  maxGreen: number | null;

  @Column({ type: 'numeric', name: 'MinYellow', nullable: true })
  minYellow: number | null;

  @Column({ type: 'numeric', name: 'MaxYellow', nullable: true })
  maxYellow: number | null;

  @Column({ type: 'numeric', name: 'MinRed', nullable: true })
  minRed: number | null;

  @Column({ type: 'numeric', name: 'MaxRed', nullable: true })
  maxRed: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}