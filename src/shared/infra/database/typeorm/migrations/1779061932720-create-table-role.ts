import { ID_USER_DEFAULT } from '@/shared/application/constants/id-user-default';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableRole1779061932720 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'roles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default: 'public.uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'company',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'created_by',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'updated_by',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'deleted_by',
            type: 'uuid',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'fk_role_company',
            columnNames: ['company'],
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
    await queryRunner.query(`
      INSERT INTO roles (id, name, company, created_at, updated_at, created_by, updated_by)
      VALUES (
        'e4eebc99-9c0b-4ef8-bb6d-6bb9bd380a55',
        'Super Admin',
        'd3eebc99-9c0b-4ef8-bb6d-6bb9bd380a44',
        now(),
        now(),
        '${ID_USER_DEFAULT}',
        '${ID_USER_DEFAULT}'
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
