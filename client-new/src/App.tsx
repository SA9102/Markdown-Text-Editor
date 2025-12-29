import Toolbar from "./components/custom/Toolbar";
import NavigationSidebar from "./components/custom/NavigationSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { useNodeStore } from "./store/nodeStore";
import { useEffect, useState } from "react";
import { Textarea } from "./components/ui/textarea";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import EditorViewer from "./components/custom/EditorViewer";

const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <Toolbar />
      <SidebarProvider>
        {/* <div className="flex flex-1 overflow-hidden"> */}
        <NavigationSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <EditorViewer />
        </main>
        {/* </div> */}
      </SidebarProvider>
    </div>
  );
};

export default App;
