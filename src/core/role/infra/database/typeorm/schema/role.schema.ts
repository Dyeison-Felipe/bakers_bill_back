import { CompanySchema } from '@/core/company/infra/database/typeorm/schema/company.schema';
import { UserSchema } from '@/core/user/infra/database/typeorm/schema/user.schema';
import { BaseSchema } from '@/shared/infra/database/typeorm/schema/baseSchema/baseSchema';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('role')
export class RoleSchema extends BaseSchema {
  @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
  name: string;

  @JoinColumn({
    name: 'company',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_role_company',
  })
  @ManyToOne(() => CompanySchema, (company) => company.role)
  company: CompanySchema;

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

  @OneToMany(() => UserSchema, (user) => user.role)
  user: UserSchema[];
}
