import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BomAssembly' })
export class LegacyBomAssembly {
  @PrimaryColumn({ type: 'bigint', name: 'BomAssemblyID' })
  bomAssemblyID: number;

  @Column({ type: 'bigint', name: 'BomItemRef' })
  bomItemRef: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}