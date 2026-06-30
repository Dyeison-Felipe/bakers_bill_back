export type CreateCategoryOutput = {
  id: string;
  name: string;
  parent: {
    id: string;
    name: string;
  } | null;
};
