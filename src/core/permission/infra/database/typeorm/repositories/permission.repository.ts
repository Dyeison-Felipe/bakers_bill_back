import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { PermissionMappper } from './mapper/permission.mapper';
import { PROVIDERS } from '@/shared/application/constants/providers';
import { PermissionSchema } from '../schema/permission.schema';
import { PermissionRepository } from '@/core/permission/domain/repositories/permission.repository';
import { Permission } from '@/core/permission/domain/entity/permission.entity';

export class PermissionRepositoryImpl implements PermissionRepository {
  constructor(
    @InjectRepository(PermissionSchema)
    private readonly permissionRepository: Repository<PermissionSchema>,
  ) {}

  async findPermissionsById(ids: string[]): Promise<Permission[]> {
    const permissionsSchema = await this.permissionRepository.find({
      where: { id: In(ids) },
    });

    const permissionsEntity = permissionsSchema.map((permission) =>
      PermissionMappper.toEntity(permission),
    );

    return permissionsEntity;
  }

  async save(entity: Permission): Promise<Permission> {
    const permissionSchema = PermissionMappper.toSchema(entity);

    const savedPermission =
      await this.permissionRepository.save(permissionSchema);

    const permissionEntity =
      PermissionMappper.toEntity(savedPermission);

    return permissionEntity;
  }

  async findAll(): Promise<Permission[] | null> {
    const permissionsSchema = await this.permissionRepository.find();

    if (!permissionsSchema || permissionsSchema.length === 0) return null;

    const permissionEntity = permissionsSchema.map((permission) =>
      PermissionMappper.toEntity(permission),
    );

    return permissionEntity;
  }

  async findById(id: string): Promise<Permission | null> {
    const permissionSchema = await this.permissionRepository.findOne({
      where: { id },
    });

    if (!permissionSchema) return null;

    const permissionEntity =
      PermissionMappper.toEntity(permissionSchema);

    return permissionEntity;
  }

  async update(entity: Permission): Promise<Permission> {
    const permissionSchema = PermissionMappper.toSchema(entity);

    const savedPermission =
      await this.permissionRepository.save(permissionSchema);

    const permissionEntity =
      PermissionMappper.toEntity(savedPermission);

    return permissionEntity;
  }

  async delete(id: string): Promise<void> {
    await this.permissionRepository.softDelete(id);
  }
}
