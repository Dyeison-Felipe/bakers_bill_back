import { PermissionSchema } from '../../schema/permission.schema';
import { Permission } from '@/core/permissions/domain/entity/permission.entity';

export class PermissionMappper {
  static toEntity(schema: PermissionSchema): Permission {
    return new Permission({
      id: schema.id,
      action: schema.action,
      subject: schema.subject,
      description: schema.description,
      auditable: {
        createdAt: schema.createdAt,
        updatedAt: schema.updatedAt,
        deletedAt: schema.deletedAt,
      },
    });
  }
  static toSchema(entity: Permission): PermissionSchema {
    return PermissionSchema.with({
      id: entity.id,
      action: entity.action,
      subject: entity.subject,
      description: entity.description,
      createdAt: entity.auditable?.createdAt,
      updatedAt: entity.auditable?.updatedAt,
      deletedAt: entity.auditable?.deletedAt,
    });
  }
}
