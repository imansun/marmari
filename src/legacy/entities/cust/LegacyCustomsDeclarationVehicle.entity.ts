import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomsDeclarationVehicle' })
export class LegacyCustomsDeclarationVehicle {
  @PrimaryColumn({ type: 'bigint', name: 'CustomsDeclarationVehicleID' })
  customsDeclarationVehicleID: number;

  @Column({ type: 'bigint', name: 'CustomsDeclarationRef' })
  customsDeclarationRef: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef', nullable: true })
  transportationVehicleRef: number | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleTypeRef', nullable: true })
  transportationVehicleTypeRef: number | null;

  @Column({ type: 'character varying', name: 'TransportationVehiclePlateIdentifier', nullable: true })
  transportationVehiclePlateIdentifier: string | null;

  @Column({ type: 'bigint', name: 'InternationalTransportationVehicleRef', nullable: true })
  internationalTransportationVehicleRef: number | null;

  @Column({ type: 'bigint', name: 'InternationalTransportationVehicleTypeRef', nullable: true })
  internationalTransportationVehicleTypeRef: number | null;

  @Column({ type: 'character varying', name: 'InternationalTransportationVehiclePlateIdentifier', nullable: true })
  internationalTransportationVehiclePlateIdentifier: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}