import { CitySchema } from '@/core/city/infra/database/typeorm/schema/city.schema';
import { CompanySchema } from '@/core/company/infra/database/typeorm/schema/company.schema';
import { BaseSchema } from '@/shared/infra/database/typeorm/schema/baseSchema/baseSchema';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity('address')
export class AddressSchema extends BaseSchema {
  @Column({ name: 'cep', type: 'varchar', nullable: true, length: 8 })
  cep: string | null;

  @Column({ name: 'neighborhood', nullable: false, length: 255 })
  neighborhood: string;

  @Column({ name: 'street', nullable: false, length: 255 })
  street: string;

  @Column({ name: 'number', nullable: false, length: 10 })
  number: string;

  @Column({ name: 'complement', type: 'varchar', nullable: true, length: 255 })
  complement: string | null;

  @Column({
    name: 'latitude',
    nullable: true,
    type: 'decimal',
    precision: 10,
    scale: 7,
  })
  latitude: number | null;

  @Column({
    name: 'longitude',
    nullable: true,
    type: 'decimal',
    precision: 10,
    scale: 7,
  })
  longitude: number | null;

  @JoinColumn({
    name: 'city',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_addresses_city_id',
  })
  @ManyToOne(() => CitySchema, (city) => city.addresses, { nullable: false })
  city: CitySchema;

  @Column({ name: 'created_by', type: 'uuid', nullable: false })
  createdBy: string;

  @Column({ name: 'updated_by', type: 'uuid', nullable: false })
  updatedBy: string;

  @Column({
    name: 'deleted_by',
    type: 'uuid',
    nullable: true,
  })
  deletedBy: string | null;

  @OneToOne(() => CompanySchema, (company) => company.address)
  company: CompanySchema;
}
