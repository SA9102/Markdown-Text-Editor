import type { Node } from "./Node";

export type File = Node & {
  body: string;
  isSelected: boolean;
};
