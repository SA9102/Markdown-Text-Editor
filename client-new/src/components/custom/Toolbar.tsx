import type { VariantProps } from "class-variance-authority";
import { Button } from "../ui/button";

const buttonProps: VariantProps<typeof Button> = {
  size: "sm",
  variant: "outline",
};

const Toolbar = () => {
  return (
    <div className="flex space-x-2 p-2 border-b">
      <Button {...buttonProps}>New File</Button>
      <Button {...buttonProps}>New Folder</Button>
    </div>
  );
};

export default Toolbar;
