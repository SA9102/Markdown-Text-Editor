import { useNodeStore } from "@/store/nodeStore";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";

const EditorViewer = () => {
  const nodes = useNodeStore((s) => s.nodes);
  const selectedFileId = useNodeStore((s) => s.selectedFileId);

  const [node, setNode] = useState(null);

  useEffect(() => {
    if (selectedFileId !== "") {
      const n = nodes.find((x) => {
        console.log(x);
        return x.id === selectedFileId;
      });
      console.log("n", n);
      setNode(n);
    }
  }, [selectedFileId]);

  return (
    <div className="flex ">
      <Textarea
        className="flex-1"
        value={node ? node.body : ""}
        onChange={(e) => {
          if (node) {
            setNode({ ...node, body: e.target.value });
          }
        }}
      />
      <div className="p-4 flex-1 bg-gray-900">
        <p className="mt-2">{node ? node.body : "nothing here"}</p>
      </div>
    </div>
  );
};

export default EditorViewer;
