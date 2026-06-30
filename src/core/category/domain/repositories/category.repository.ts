import { BaseRepository } from '@/shared/domain/repository/base-repository';
import { Category } from '../entities/category.entity';

export interface CategoryRepository extends BaseRepository<Category> {
  findCategoryByNameAndCompanyId(
    categoryName: string,
    companyId: string,
  ): Promise<Category | null>;
  findAllByCompanyId(companyId: string): Promise<Category[]>;
  findCategoryByIdAndCompanyId(
    categoryId: string,
    companyId: string,
  ): Promise<Category | null>;
}
