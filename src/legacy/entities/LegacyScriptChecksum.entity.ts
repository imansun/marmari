import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: '_ScriptChecksum' })
export class LegacyScriptChecksum {
  @PrimaryColumn({ type: 'character varying', name: 'FileName' })
  fileName: string;

  @Column({ type: 'integer', name: 'Checksum' })
  checksum: number;

}