export type CategoryOutput = {
  id: string;
  name: string;
  parentId: string | null;
  children: CategoryOutput[];
};