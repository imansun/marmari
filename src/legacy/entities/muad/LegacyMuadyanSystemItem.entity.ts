import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MuadyanSystemItem' })
export class LegacyMuadyanSystemItem {
  @PrimaryColumn({ type: 'bigint', name: 'MuadyanSystemItemID' })
  muadyanSystemItemID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'CutRef', nullable: true })
  cutRef: number | null;

  @Column({ type: 'bigint', name: 'BrndRef', nullable: true })
  brndRef: number | null;

  @Column({ type: 'bigint', name: 'HemLineRef', nullable: true })
  hemLineRef: number | null;

  @Column({ type: 'bigint', name: 'OnceRef', nullable: true })
  onceRef: number | null;

  @Column({ type: 'numeric', name: 'MudyanSystemMark', nullable: true })
  mudyanSystemMark: number | null;

  @Column({ type: 'character varying', name: 'GoodsDescription', nullable: true })
  goodsDescription: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}