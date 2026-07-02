import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScriptTemplate' })
export class LegacyScriptTemplate {
  @PrimaryColumn({ type: 'character varying', name: 'Key' })
  key: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Script' })
  script: string | null;

}