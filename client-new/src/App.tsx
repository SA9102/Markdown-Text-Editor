import Toolbar from "./components/custom/Toolbar";
import NavigationSidebar from "./components/custom/NavigationSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <Toolbar />
      <SidebarProvider>
        {/* <div className="flex flex-1 overflow-hidden"> */}
        <NavigationSidebar />
        <main>
          <SidebarTrigger />
          <div className="p-4">
            <h1 className="text-2xl font-bold">
              Welcome to the Markdown Text Editor
            </h1>
            <p className="mt-2">Start editing your markdown files!</p>
          </div>
        </main>
        {/* </div> */}
      </SidebarProvider>
    </div>
  );
};

export default App;
