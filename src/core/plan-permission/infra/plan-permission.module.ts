import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanPermissionSchema } from './database/typeorm/schema/plan-permission.schema';
import { PROVIDERS } from '@/shared/application/constants/providers';
import { PlanPermissionRepositoryImpl } from './database/typeorm/repositories/plan-permission.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlanPermissionSchema])],
  controllers: [],
  providers: [
    {
      provide: PROVIDERS.PLAN_PERMISSION_REPOSITORY,
      useClass: PlanPermissionRepositoryImpl
    }
  ],
  exports: [PROVIDERS.PLAN_PERMISSION_REPOSITORY],
})
export class PlanPermissionModule {}
