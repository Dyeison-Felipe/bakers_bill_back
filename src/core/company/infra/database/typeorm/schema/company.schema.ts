import { AddressSchema } from '@/core/address/infra/database/typeorm/schema/address.schema';
import { UserSchema } from '@/core/user/infra/database/typeorm/schema/user.schema';
import { BaseSchema } from '@/shared/infra/database/typeorm/schema/baseSchema/baseSchema';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('company')
export class CompanySchema extends BaseSchema {
  @Column({
    name: 'fantasyName',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  fantasyName: string;

  @Column({
    name: 'socialReazon',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  socialReazon: string;

  @Column({
    name: 'cnpj',
    type: 'varchar',
    length: 14,
    nullable: false,
  })
  cnpj: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  email: string;

  @Column({
    name: 'phoneNumber',
    type: 'varchar',
    length: 13,
    nullable: false,
  })
  phoneNumber: string;

  @Column({
    name: 'logotipo',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  logotipo: string;

  @Column({
    name: 'active',
    type: 'boolean',
    nullable: false,
  })
  active: boolean;

  @JoinColumn({
    name: 'created_by',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_company_created_by',
  })
  @ManyToOne(() => UserSchema, { nullable: false })
  createdBy: UserSchema;

  @JoinColumn({
    name: 'updated_by',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_company_updated_by',
  })
  @ManyToOne(() => UserSchema, { nullable: false })
  updatedBy: UserSchema;

  @JoinColumn({
    name: 'deleted_by',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_company_deleted_by',
  })
  @ManyToOne(() => UserSchema, { nullable: true })
  deletedBy: UserSchema | null;

  @JoinColumn({
    name: 'address',
    foreignKeyConstraintName: 'fk_company_address',
  })
  @OneToOne(() => AddressSchema, (address) => address.company)
  address: AddressSchema;
}
