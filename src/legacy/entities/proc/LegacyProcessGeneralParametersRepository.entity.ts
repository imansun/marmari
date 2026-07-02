import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessGeneralParametersRepository' })
export class LegacyProcessGeneralParametersRepository {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessGeneralParametersRepositoryID' })
  processGeneralParametersRepositoryID: number;

  @Column({ type: 'timestamp without time zone', name: 'LastUpdate' })
  lastUpdate: Date;

  @Column({ type: 'character varying', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'character varying', name: 'TypeName' })
  typeName: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'uuid', name: 'LastUpdateInstanceId', nullable: true })
  lastUpdateInstanceId: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}