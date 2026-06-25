import { UserPermissionSchema } from '../../schema/user-permission.schema';
import { UserPersmissionEntity } from '@/core/user-permissions/domain/entities/user-permission.entity';
import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from '@/shared/application/constants/providers';
import { UserRepositoryMapper } from '@/core/user/infra/database/typeorm/repositories/mapper/user-mapper';
import { PermissionMappper } from '@/core/permissions/infra/database/typeorm/repositories/mapper/permission.mapper';

@Injectable()
export class UserPermissionRepositoryMapper {
  static toEntity(schema: UserPermissionSchema): UserPersmissionEntity {
    return new UserPersmissionEntity({
      id: schema.id,
      user: null as any,
      permission: PermissionMappper.toEntity(schema.permission),
    });
  }
  static toSchema(entity: UserPersmissionEntity): UserPermissionSchema {
    return UserPermissionSchema.with({
      id: entity.id,
      user: UserRepositoryMapper.toSchema(entity.user),
      permission: PermissionMappper.toSchema(entity.permission),
    });
  }
}
