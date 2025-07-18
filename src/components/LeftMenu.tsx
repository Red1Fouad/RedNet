import React from "react";
import UserComponent from "@/components/UserComponent";
import MenuDesktop from "./MenuDesktop";
import { LogOut, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logOut } from "@/actions/logOut";
import { PostForm } from "./PostForm";

const LeftMenu = () => {
  return (
    <div className="w-48 space-y-2">
      <UserComponent />
      <MenuDesktop />
      <PostForm />
      <form action={logOut} className="mt-2">
        <Button variant={"destructive"} className="rounded-full cursor-pointer">
          {" "}
          <LogOut className="w-5 h-5" /> <span>Log Out</span>{" "}
        </Button>
      </form>
    </div>
  );
};

export default LeftMenu;
