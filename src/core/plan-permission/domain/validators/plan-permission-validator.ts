import {
  IsNotEmpty,
} from 'class-validator';
import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-field';
import { Type } from 'class-transformer';
import { RoleRules } from '@/core/role/domain/validators/role-validators';
import { CompanyRules } from '@/core/company/domain/validators/company-validator';
import { PlanRules } from '@/core/plan/domain/validators/plan-validate';
import { PermissionRules } from '@/core/permissions/domain/validators/permission-validator';
import { PlanPermissionProps } from '../entity/plan-permission.entity';

export class PlanPermissionRules {
  @Type(() => RoleRules)
  @IsNotEmpty()
  plan: PlanRules;

  @Type(() => CompanyRules)
  @IsNotEmpty()
  permission: PermissionRules;

  constructor(data: PlanPermissionProps) {
    Object.assign(this, data);
  }
}

export class PlanPermissionValidator extends ClassValidatorFields<PlanPermissionRules> {
  validate(data: PlanPermissionProps): boolean {
    return super.validate(new PlanPermissionRules(data ?? {}));
  }
}

export class PlanPermissionValidatorFactory {
  static create(): PlanPermissionValidator {
    // Retorna a instância do PlanValidator
    return new PlanPermissionValidator();
  }
}
