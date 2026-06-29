import { CompanyOutput } from "../company/company.output";
import { PermissionsOutput } from "../permissions/permission.output";

export type FindByUserId = {
  id: string;
  role: string;
  username: string;
  email: string;
  permissions?: PermissionsOutput[]
}