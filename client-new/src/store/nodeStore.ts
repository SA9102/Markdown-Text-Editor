import { create } from "zustand";
import type { File } from "@/types/file-system/File";
import type { Folder } from "@/types/file-system/Folder";

type NodeStore = {
  nodes: (File | Folder)[];
  rootNodeIds: string[];
  selectedFileId: string;
  setSelectedFileId: (fileId: string) => void;
  setFile: (file: File) => void;
};

const nodes: (File | Folder)[] = [
  {
    id: "1",
    name: "Home",
    nodes: ["2", "3", "4"],
  },
  {
    id: "2",
    name: "Documents",
    nodes: ["5", "6"],
  },
  {
    id: "3",
    name: "Downloads",
    nodes: [],
  },
  {
    id: "4",
    name: "Pictures",
    nodes: [],
  },
  {
    id: "5",
    name: "report.docx",
    body: "hello world",
    isSelected: false,
  },
  {
    id: "6",
    name: "docs.docx",
    body: "some docs",
    isSelected: false,
  },
];

const rootNodeIds: string[] = ["1"];

export const useNodeStore = create<NodeStore>()((set) => ({
  nodes,
  rootNodeIds,
  selectedFileId: "",
  setSelectedFileId: (fileId) => set({ selectedFileId: fileId }),
  setFile: (file) => {
    const newNodes = nodes.map((node) => {
      if (node.id === file.id) {
        return file;
      }
      return node;
    });
    set({ nodes: newNodes });
  },
}));
