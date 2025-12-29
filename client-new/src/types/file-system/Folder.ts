import type { File } from "./File";
import type { Node } from "./Node";

export type Folder = Node & {
  nodes: string[] | (File | Folder)[];
};
