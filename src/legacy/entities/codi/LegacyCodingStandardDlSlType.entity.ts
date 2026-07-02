import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardDlSlType' })
export class LegacyCodingStandardDlSlType {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardDLID' })
  codingStandardDLID: number;

  @Column({ type: 'character varying', name: 'ProtocolVersionStr' })
  protocolVersionStr: string;

  @Column({ type: 'character varying', name: 'SLType' })
  sLType: string;

  @Column({ type: 'character varying', name: 'DLType' })
  dLType: string;

}