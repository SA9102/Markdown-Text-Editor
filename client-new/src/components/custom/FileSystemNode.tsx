import {
  ChevronDown,
  ChevronRight,
  EllipsisVertical,
  File,
  Folder,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { useState } from "react";
import { Button } from "../ui/button";
import { useNodeStore } from "@/store/nodeStore";

const FileSystemNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const setSelectedFileId = useNodeStore((s) => s.setSelectedFileId);

  const isFolder = () => node.nodes;

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          <SidebarMenuItem
            // className="pl-4"
            key={node.id}
          >
            <SidebarMenuButton
              asChild
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="cursor-pointer"
              onClick={() => {
                if (isFolder()) {
                  setIsOpen(!isOpen);
                } else {
                  setSelectedFileId(node.id);
                }
              }}
            >
              <span>
                {isFolder() ? (
                  <>
                    {isOpen ? (
                      <ChevronDown color="#ffffff" />
                    ) : (
                      <ChevronRight color="#ffffff" />
                    )}
                    <Folder color="#ffffff" />
                  </>
                ) : (
                  <File color="#ffffff" />
                )}
                {node.name}
                {isHovered && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  ></Button>
                )}
              </span>
              {/* </a> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Rename</ContextMenuItem>
          <ContextMenuItem>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      {isOpen && (
        <div className="pl-4">
          {isFolder() &&
            node.nodes.map((childNode) => (
              <FileSystemNode
                key={childNode.id}
                node={childNode}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default FileSystemNode;
