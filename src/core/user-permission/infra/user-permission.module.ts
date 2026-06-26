import { PROVIDERS } from '@/shared/application/constants/providers';
import { Module } from '@nestjs/common';
import { UserPermissionRepositoryImpl } from './database/typeorm/repositories/user-permission.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPermissionSchema } from './database/typeorm/schema/user-permission.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserPermissionSchema])],
  providers: [
    {
      provide: PROVIDERS.USER_PERMISSION_REPOSITORY,
      useClass: UserPermissionRepositoryImpl,
    },
  ],
  exports: [
    PROVIDERS.USER_PERMISSION_REPOSITORY,
  ],
})
export class UserPermissionModule {}
