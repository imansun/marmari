import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessServiceArgument' })
export class LegacyProcessServiceArgument {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessServiceArgumentID' })
  processServiceArgumentID: number;

  @Column({ type: 'bigint', name: 'ProcessServiceOperationRef' })
  processServiceOperationRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'TypeName' })
  typeName: string;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}