import { PermissionSchema } from '@/core/permissions/infra/database/typeorm/schema/permission.schema';
import { UserPermissionSchema } from '@/core/user-permissions/infra/database/typeorm/schema/user-permission.schema';
import { BaseSchema } from '@/shared/infra/database/typeorm/schema/baseSchema/baseSchema';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('users')
export class UserSchema extends BaseSchema {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  active: boolean;

  @Column({name: 'password_reset_code', type: 'varchar', nullable: true, length: 6})
  passwordResetCode?: string | null;

  @Column({name: 'expired_at_code', type: 'timestamp', nullable: true})
  expiredAtCode?: Date | null;

  @JoinColumn({
    name: 'created_by',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_created_by',
  })
  @ManyToOne(() => UserSchema, { nullable: true })
  createdBy: UserSchema | null;

  @JoinColumn({
    name: 'updated_by',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_updated_by',
  })
  @ManyToOne(() => UserSchema, { nullable: true })
  updatedBy: UserSchema | null;

  @JoinColumn({
    name: 'deleted_by',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_deleted_by',
  })
  @ManyToOne(() => UserSchema, { nullable: true })
  deletedBy: UserSchema | null;

  @OneToMany(() => UserPermissionSchema, (up) => up.user)
  userPermissions: UserPermissionSchema[];
}
