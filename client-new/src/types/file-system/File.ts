import type { Node } from "./Node";

export type File = Node & {
  type: "file";
  body: string;
  isSelected: boolean;
};
