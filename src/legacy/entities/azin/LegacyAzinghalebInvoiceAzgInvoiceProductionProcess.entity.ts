import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AzinghalebInvoiceAzgInvoiceProductionProcess' })
export class LegacyAzinghalebInvoiceAzgInvoiceProductionProcess {
  @PrimaryColumn({ type: 'bigint', name: 'AzinghalebInvoiceAzgInvoiceProductionProcessID' })
  azinghalebInvoiceAzgInvoiceProductionProcessID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'integer', name: 'TractCode', nullable: true })
  tractCode: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'bigint', name: 'ApraturNameRef', nullable: true })
  apraturNameRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'AmlyatAlphaDate', nullable: true })
  amlyatAlphaDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'AmlyatAccomplishmentDate', nullable: true })
  amlyatAccomplishmentDate: Date | null;

  @Column({ type: 'numeric', name: 'MinuteHsbFrontageIsMorphologyTimeSum', nullable: true })
  minuteHsbFrontageIsMorphologyTimeSum: number | null;

  @Column({ type: 'bigint', name: 'QualitativeConfirmFormRef', nullable: true })
  qualitativeConfirmFormRef: number | null;

  @Column({ type: 'bigint', name: 'No2ApraturNameRef', nullable: true })
  no2ApraturNameRef: number | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'bigint', name: 'ProductionProcessAmlyatRenderingRef', nullable: true })
  productionProcessAmlyatRenderingRef: number | null;

  @Column({ type: 'character varying', name: 'CameoName', nullable: true })
  cameoName: string | null;

  @Column({ type: 'character varying', name: 'RenderingCoded', nullable: true })
  renderingCoded: string | null;

  @Column({ type: 'character varying', name: 'FrayndItemComments', nullable: true })
  frayndItemComments: string | null;

  @Column({ type: 'numeric', name: 'MinuteHsbFrontageFrameworkCymbalTime', nullable: true })
  minuteHsbFrontageFrameworkCymbalTime: number | null;

  @Column({ type: 'numeric', name: 'MinuteHsbFrontageAllCymbalTimeFromAberrance', nullable: true })
  minuteHsbFrontageAllCymbalTimeFromAberrance: number | null;

  @Column({ type: 'numeric', name: 'AmlyatProcessCue', nullable: true })
  amlyatProcessCue: number | null;

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