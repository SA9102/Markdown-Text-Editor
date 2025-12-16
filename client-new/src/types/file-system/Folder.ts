import type { Node } from "./Node";

export type Folder = Node & {
  type: "folder";
  isExpanded: boolean;
  childrenIds: string[] | null;
};
