import { CompanyRepository } from '@/core/company/domain/repositories/company.repository';
import { PROVIDERS } from '@/shared/application/constants/providers';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanySchema } from '../schema/company.schema';
import { Repository } from 'typeorm';
import { CompanyEntity } from '@/core/company/domain/entities/company.entity';
import { CompanyRepositoryMapper } from './company-repository.mapper';

export class CompanyRepositoryImpl implements CompanyRepository {
  constructor(
    @InjectRepository(CompanySchema)
    private readonly companyRepository: Repository<CompanySchema>,
  ) {}

  async save(entity: CompanyEntity): Promise<CompanyEntity> {
    const schema = CompanyRepositoryMapper.toSchema(entity);

    const save = await this.companyRepository.save(schema);

    const companyEntity = CompanyRepositoryMapper.toEntity(save);

    return companyEntity;
  }

  async findById(id: string): Promise<CompanyEntity | null> {
    const companySchema = await this.companyRepository.findOne({
      where: { id },
      relations: ['address'],
    });

    if (!companySchema) return null;

    const companyEntity = CompanyRepositoryMapper.toEntity(companySchema);

    return companyEntity;
  }

  async update(entity: CompanyEntity): Promise<CompanyEntity> {
    const schema = CompanyRepositoryMapper.toSchema(entity);

    const save = await this.companyRepository.save(schema);

    const companyEntity = CompanyRepositoryMapper.toEntity(save);

    return companyEntity;
  }

  async delete(id: string): Promise<void> {
    await this.companyRepository.softDelete(id);
  }
}
