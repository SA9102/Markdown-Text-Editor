import type { File } from "./File";
import type { Folder } from "./Folder";

export type NodeTree = File | (Folder & { children: NodeTree[] });
