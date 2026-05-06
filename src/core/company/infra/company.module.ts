import { PROVIDERS } from '@/shared/application/constants/providers';
import { Module } from '@nestjs/common';
import { CompanyRepositoryImpl } from './database/typeorm/repository/company.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanySchema } from './database/typeorm/schema/company.schema';
import { AddressModule } from '@/core/address/infra/address.module';

@Module({
  imports: [TypeOrmModule.forFeature([CompanySchema]), AddressModule],
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
