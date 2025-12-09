import FileType from "./FileType.js";
import FileAndFolderTreeType from "./FileAndFolderTreeType.js";

type FolderType = {
  id: string;
  parentFolderIds: string[];
  type: string;
  name: string;
  isExpand: boolean;
  isEditingName: boolean;
  items: FileAndFolderTreeType;
};

export default FolderType;
