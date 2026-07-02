import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServicePanelConfig' })
export class LegacySelfServicePanelConfig {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServicePanelConfigID' })
  selfServicePanelConfigID: number;

  @Column({ type: 'integer', name: 'PanelIdentifier' })
  panelIdentifier: number;

  @Column({ type: 'integer', name: 'PositionCode' })
  positionCode: number;

  @Column({ type: 'integer', name: 'Width' })
  width: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}