import { InjectRepository } from '@nestjs/typeorm';
import { UserPermissionSchema } from '../schema/user-permission.schema';
import { Repository } from 'typeorm';
import { UserPermissionRepositoryMapper } from './mapper/user-permission-repository.mapper';
import { UserPermissionRepository } from '@/core/user-permission/domain/repositories/user-permission.repository';
import { UserPersmissionEntity } from '@/core/user-permission/domain/entities/user-permission.entity';

export class UserPermissionRepositoryImpl implements UserPermissionRepository {
  constructor(
    @InjectRepository(UserPermissionSchema)
    private readonly userPermissionRepository: Repository<UserPermissionSchema>,
  ) {}

  async create(entity: UserPersmissionEntity): Promise<UserPersmissionEntity> {
    const userPermissionSchema =
      UserPermissionRepositoryMapper.toSchema(entity);

    const save = await this.userPermissionRepository.save(userPermissionSchema);

    const UserPersmissionEntity = UserPermissionRepositoryMapper.toEntity(save);

    return UserPersmissionEntity;
  }

  async findAllPermissionByUser(
    userId: string,
  ): Promise<UserPersmissionEntity[]> {
    const userPermissions = await this.userPermissionRepository.find({
      where: { user: { id: userId } },
      relations: ['user', 'permission'],
    });

    const userPermissionEntity = userPermissions.map((userPermission) =>
      UserPermissionRepositoryMapper.toEntity(userPermission),
    );

    return userPermissionEntity;
  }

  async softDelete(id: string): Promise<void> {
    await this.userPermissionRepository.softDelete(id);
  }
}
