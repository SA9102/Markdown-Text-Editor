export type Node = {
  id: string;
  name: string;
  type: "file" | "folder";
  isEditingName: boolean;
};
