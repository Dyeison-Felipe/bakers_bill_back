import { Permission } from '@/core/permissions/domain/entity/permission.entity';
import { Plan } from '@/core/plan/domain/entities/plan.entity';
import { Data } from '@/shared/domain/decorators/data.decorator';
import { BaseEntity } from '@/shared/domain/entity/base-entity';
import { PlanPermissionValidatorFactory } from '../validators/plan-permission-validator';
import { EntityValidationError } from '@/shared/application/errors/validation-error';

export type PlanPermissionProps = {
  plan: Plan;
  permission: Permission;
};

type CreatePlanPermissionProps = {
  plan: Plan;
  permission: Permission;
};

export interface PlanPermission extends PlanPermissionProps {}

@Data()
export class PlanPermission extends BaseEntity<PlanPermissionProps> {
  static create(props: CreatePlanPermissionProps): PlanPermission {
    const planPermission = new PlanPermission({
      id: crypto.randomUUID(),
      permission: props.permission,
      plan: props.plan,
      auditable: {
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    });

    return planPermission;
  }

  protected validate() {
    const validator = PlanPermissionValidatorFactory.create();

    const isValid = validator.validate(this.props);

    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }
}
