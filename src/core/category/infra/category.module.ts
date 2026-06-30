import { PROVIDERS } from '@/shared/application/constants/providers';
import { Module } from '@nestjs/common';
import { CategoryRepositoryImpl } from './database/typeorm/repositories/category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorySchema } from './database/typeorm/schema/category.schema';

@Module({
  imports: [TypeOrmModule.forFeature([CategorySchema])],
  controllers: [],
  providers: [
    {
      provide: PROVIDERS.CATEGORY_REPOSITORY,
      useClass: CategoryRepositoryImpl,
    },
  ],
  exports: [PROVIDERS.CATEGORY_REPOSITORY],
})
export class CategoryModule {}
