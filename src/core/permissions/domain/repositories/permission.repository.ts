import { BaseRepository } from '@/shared/domain/repository/base-repository';
import { Permission } from '../entity/permission.entity';

export interface PermissionRepository extends BaseRepository<Permission> {
  findAll(): Promise<Permission[] | null>;
  findPermissionsById(id: string[]): Promise<Permission[]>;
}
