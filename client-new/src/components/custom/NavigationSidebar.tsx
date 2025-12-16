import {
  Calendar,
  FilePlus,
  FolderPlus,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import type { VariantProps } from "class-variance-authority";
import type { FilesAndFolders, NodeTree } from "@/types/file-system/NodeTree";
import type { Folder } from "@/types/file-system/Folder";
import type { NodeMap } from "@/types/file-system/NodeMap";
import { useState } from "react";
import FileSystemNode from "./FileSystemNode";

// Menu items.
// const items: NodeMap =  {
//   "1": {
//     id: "1",
//     type: "folder",
//     name: "folder 1",
//     isExpanded: false,
//     isEditingName: false,
//     childrenIds: ["4"],
//   },
//   "2": {
//     id: "2",
//     type: "folder",
//     name: "folder 2",
//     isExpanded: false,
//     isEditingName: false,
//     childrenIds: null,
//   },
//   "3": {
//     id: "3",
//     type: "folder",
//     name: "folder 3",
//     isExpanded: false,
//     isEditingName: false,
//     childrenIds: null,
//   },
//   "4": {
//     id: "4",
//     type: "folder",
//     name: "file",
//     isExpanded: false,
//     isEditingName: false,
//     childrenIds: null,
//   }
// };

// const rootIds: string[] = ["1", "2", "3"];

type node = {
  id: string;
  name: string;
  nodes?: node[];
};

// const buildTree = (rootIds: string[], map: NodeMap): NodeTree[] => {
//   return rootIds.map((id) => {
//     const node = map[id]
//     if (node.type === "folder" && node.childrenIds) {
//       return {...node, children: buildTree(node.childrenIds, map)}
//     } else {
//       return node;
//     }
//     // if (node.type === "folder" && node.childrenIds) {
//     //   return {
//     //     ...node,
//     //     children: node.childrenIds ? buildTree(node.childrenIds, map) : []
//     //   };
//     // } else {
//     //   return node
//     // }
//   })
// }

const buttonProps: VariantProps<typeof Button> = {
  size: "icon",
  variant: "ghost",
};

const NavigationSidebar = () => {
  const [nodes, setNodes] = useState<node[]>([
    {
      id: "1",
      name: "Home",
      nodes: [
        {
          id: "2",
          name: "Documents",
          nodes: [
            {
              id: "1",
              name: "report.docx",
            },
          ],
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
      ],
    },
  ]);

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex">
          <Button {...buttonProps}>
            <FilePlus size={16} />
          </Button>
          <Button {...buttonProps}>
            <FolderPlus />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {nodes.map((node) => (
                <FileSystemNode node={node} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default NavigationSidebar;
