// React
import { useState } from "react";

// Types
import FileType from "../types/FileType";
import FileEditOptions from "./FileEditOptions";

// Mantine
import { Button, Divider, Group, Text, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type FileTabProps = {
  file: FileType;
  paddingLeft: number;
  onDelete: (arg0: string[], arg1: string, arg2: string) => void;
  onToggleEdit: (arg0: string[], arg1: string) => void;
  onUpdateName: (arg0: string[], arg1: string, arg2: string) => void;
  onSelectFile: (arg0: string, arg1: string[], arg2: string) => void;
  onAddFileTab: (arg0: string, arg1: string, arg2: string[]) => void;
};

const FileTab = ({ file, paddingLeft, onDelete, onToggleEdit, onAddFileTab, onUpdateName, onSelectFile }: FileTabProps) => {
  const [isHover, setIsHover] = useState(false);
  const [newName, setNewName] = useState(file.name);

  const smallScreen = useMediaQuery("(max-width: 36em");
  const mediumScreen = useMediaQuery("(max-width: 62em");
  const bigScreen = useMediaQuery("(max-width: 75em");

  return (
    <>
      {/* <Group
        align="center"
        h="2rem"
        // bg="dark.6"
        bg="red"
        style={{ paddingLeft: `${paddingLeft}rem`, borderTop: "1px solid black", borderBottom: "1px solid black" }}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {file.isEditingName ? (
          <>
            <TextInput
              size="compact-xs"
              type="text"
              rightSection={
                <Button
                  variant="transparent"
                  size="compact-xs"
                  onClick={() => {
                    onToggleEdit(file.parentFolderIds, file.id);
                    onUpdateName(file.parentFolderIds, file.id, newName);
                  }}
                >
                  Save
                </Button>
              }
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </>
        ) : (
          <Group
            onClick={() => {
              onSelectFile(file.id, file.parentFolderIds, file.name);
            }}
            justify="space-between"
            // w="100%"
          >
            <Text size="sm">{file.name}</Text>
          </Group>
        )}
      </Group> */}

      <Group gap="0" h="2rem" style={{ paddingLeft: `${paddingLeft}rem` }}>
        <Group
          onClick={() => {
            if (!file.isEditingName) {
              onSelectFile(file.id, file.parentFolderIds, file.name);
            }
          }}
          style={{ flexGrow: 1 }}
        >
          {file.isEditingName ? (
            <>
              <TextInput
                size="compact-xs"
                type="text"
                rightSection={
                  <Button
                    variant="transparent"
                    size="compact-xs"
                    onClick={() => {
                      onToggleEdit(file.parentFolderIds, file.id);
                      console.log("UPDATE NAME");
                      console.log(newName);
                      onUpdateName(file.parentFolderIds, file.id, newName);
                    }}
                  >
                    Save
                  </Button>
                }
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </>
          ) : (
            <Text size="sm">{file.name}</Text>
          )}
        </Group>
        {(smallScreen || mediumScreen) && !file.isEditingName && <FileEditOptions fileId={file.id} parentFolderIds={file.parentFolderIds} onEditName={onToggleEdit} onDelete={onDelete} />}
      </Group>
      <Divider />
    </>
  );
};

export default FileTab;
