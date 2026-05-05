import { PermissionsOutput } from "../permissions/permission.output";

export type FindByUserId = {
  username: string;
  email: string;
  id: string;
  permissions: PermissionsOutput[]
}