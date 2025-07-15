import React from "react";
import UserComponent from "@/components/UserComponent";
import MenuDesktop from "./MenuDesktop";
import Button from "./Button";
import { SquarePen } from "lucide-react";

const LeftMenu = () => {
  return (
    <div className="w-48 space-y-2">
      <UserComponent />
      <MenuDesktop />
      <Button icon={<SquarePen className="w-5 h-5" />}>New Post</Button>
    </div>
  );
};

export default LeftMenu;
