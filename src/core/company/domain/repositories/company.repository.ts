import { BaseRepository } from "@/shared/domain/repository/base-repository";
import { CompanyEntity } from "../entities/company.entity";

export interface CompanyRepository extends BaseRepository<CompanyEntity> {}