import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationScenario' })
export class LegacyCalculationScenario {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationScenarioID' })
  calculationScenarioID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'PartInventory' })
  partInventory: boolean;

  @Column({ type: 'boolean', name: 'PartReservedInventory' })
  partReservedInventory: boolean;

  @Column({ type: 'boolean', name: 'ReservedInterStoreDeliveryRequest' })
  reservedInterStoreDeliveryRequest: boolean;

  @Column({ type: 'boolean', name: 'PurchaseRequestInway' })
  purchaseRequestInway: boolean;

  @Column({ type: 'boolean', name: 'ProductionOrderInway' })
  productionOrderInway: boolean;

  @Column({ type: 'boolean', name: 'PlannedOrderInway' })
  plannedOrderInway: boolean;

  @Column({ type: 'boolean', name: 'PurchasePlannedOrder' })
  purchasePlannedOrder: boolean;

  @Column({ type: 'boolean', name: 'ProductionPlannedOrder' })
  productionPlannedOrder: boolean;

  @Column({ type: 'boolean', name: 'AutomaticTimeFence' })
  automaticTimeFence: boolean;

  @Column({ type: 'boolean', name: 'SafetyStock' })
  safetyStock: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}