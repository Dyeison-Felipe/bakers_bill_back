import { PROVIDERS } from '@/shared/application/constants/providers';
import { Module } from '@nestjs/common';
import { CompanyRepositoryImpl } from './database/typeorm/repository/company.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: PROVIDERS.COMPANY_REPOSITORY,
      useClass: CompanyRepositoryImpl,
    },
  ],
  exports: [PROVIDERS.COMPANY_REPOSITORY],
})
export class CompanyModule {}
