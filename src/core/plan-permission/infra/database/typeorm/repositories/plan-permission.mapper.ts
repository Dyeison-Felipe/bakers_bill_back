import { PlanPermission } from '@/core/plan-permission/domain/entity/plan-permission.entity';
import { PlanPermissionSchema } from '../schema/plan-permission.schema';
import { PermissionMappper } from '@/core/permissions/infra/database/typeorm/repositories/mapper/permission.mapper';
import { PlanMapper } from '@/core/plan/infra/database/typeorm/repositories/mapper/plan-mapper';

export class PlanPermissionMapper {
  static toEntity(schema: PlanPermissionSchema): PlanPermission {
    return new PlanPermission({
      id: schema.id,
      permission: PermissionMappper.toEntity(schema.persmission),
      plan: PlanMapper.toEntity(schema.plan),
      auditable: {
        createdAt: schema.createdAt,
        updatedAt: schema.updatedAt,
        deletedAt: schema.deletedAt,
      },
    });
  }

  static toSchema(entity: PlanPermission): PlanPermissionSchema {
    return PlanPermissionSchema.with({
      id: entity.id,
      persmission: PermissionMappper.toSchema(entity.permission),
      plan: PlanMapper.toSchema(entity.plan),
      createdAt: entity.auditable?.createdAt,
      updatedAt: entity.auditable?.updatedAt,
      deletedAt: entity.auditable?.deletedAt,
    });
  }
}
