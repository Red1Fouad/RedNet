import { Hash } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import GlobalNav from "./GlobalNav";

const GlobalHeader = () => {
  return (
    <div>
      <div className="flex justify-between relative p-2 items-center ">
        <div className="w-full flex justify-center">
          <Image
            src={"/assets/site/logo.png"}
            alt="logo"
            width={32}
            height={32}
          />
        </div>
        <button className="absolute right-0 cursor-pointer hover:bg-accent p-2 rounded mr-5">
          <Hash className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default GlobalHeader;
