import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCode' })
export class LegacyProductCode {
  @PrimaryColumn({ type: 'character varying', name: 'FirstCode' })
  firstCode: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'SecondCode' })
  secondCode: string | null;

}