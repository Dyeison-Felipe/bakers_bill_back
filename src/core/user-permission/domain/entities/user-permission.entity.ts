import { Permission } from '@/core/permission/domain/entity/permission.entity';
import { UserEntity } from '@/core/user/domain/entities/user.entity';

export type UserPermissionProps = {
  id: string;
  user: UserEntity;
  permission: Permission;
};

export type CreatePermissionProps = {
  user: UserEntity;
  permission: Permission;
};

export type updatePermissionProps = {
  user: UserEntity;
  permission: Permission;
};

export class UserPersmissionEntity {
  id: string;
  user: UserEntity;
  permission: Permission;
  constructor(props: UserPermissionProps) {
    this.id = props.id;
    this.permission = props.permission;
    this.user = props.user;
  }

  static create(props: CreatePermissionProps): UserPersmissionEntity {
    return new UserPersmissionEntity({
      id: crypto.randomUUID(),
      user: props.user,
      permission: props.permission,
    });
  }
}
