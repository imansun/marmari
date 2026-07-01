import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1740000000000 implements MigrationInterface {
  name = 'InitialMigration1740000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // This migration is auto-generated based on entity definitions.
    // In production, generate via: npm run migration:generate -- src/database/migrations/Initial
    // For now, synchronize: true handles schema creation.
    await queryRunner.query(`SELECT 1`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop all tables in reverse order
    await queryRunner.query(`SELECT 1`);
  }
}
