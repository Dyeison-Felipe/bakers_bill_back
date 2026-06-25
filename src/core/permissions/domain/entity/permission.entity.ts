import { Data } from '@/shared/domain/decorators/data.decorator';
import { BaseEntity } from '@/shared/domain/entity/base-entity';
import { PermissionValidatorFactory } from '../validators/permission-validator';
import { EntityValidationError } from '@/shared/application/errors/validation-error';

export type PermissionProps = {
  action: string;
  subject: string;
  description: string;
};

type CreatePermissionProps = {
  action: string;
  subject: string;
  description: string;
};

export interface Permission extends PermissionProps {}

@Data()
export class Permission extends BaseEntity<PermissionProps> {
  static create(props: CreatePermissionProps): Permission {
    return new Permission({
      id: crypto.randomUUID(),
      action: props.action,
      subject: props.subject,
      description: props.description,
      auditable: {
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    });
  }

  protected validate() {
    const validator = PermissionValidatorFactory.create();

    const isValid = validator.validate(this.props);

    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }
}
