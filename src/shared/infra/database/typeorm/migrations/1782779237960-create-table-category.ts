import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCategory1782779237960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'category',
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
                    name: 'parent',
                    type: 'uuid',
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
            ],
            foreignKeys: [
                {
                    name: 'fk_category_company',
                    columnNames: ['company'],
                    referencedTableName: 'company',
                    referencedColumnNames: ['id'],
                    onDelete: 'RESTRICT',
                },
                {
                    name: 'fk_category_parent',
                    columnNames: ['parent'],
                    referencedTableName: 'category',
                    referencedColumnNames: ['id'],
                    onDelete: 'SET NULL',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category');
    }
}