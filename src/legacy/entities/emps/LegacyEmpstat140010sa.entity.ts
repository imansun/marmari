import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'empstat140010sa' })
export class LegacyEmpstat140010sa {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteFactorID' })
  employeeStatuteFactorID: number;

  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteRef' })
  employeeStatuteRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'StatuteFactorPropertyRef' })
  statuteFactorPropertyRef: number;

  @PrimaryColumn({ type: 'numeric', name: 'CalcValue' })
  calcValue: number;

  @PrimaryColumn({ type: 'numeric', name: 'EditedValue' })
  editedValue: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Value' })
  value: number;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}