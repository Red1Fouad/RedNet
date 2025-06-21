import React from "react";
import LeftMenu from "@/app/components/LeftMenu";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full hidden md:flex justify-end border-r p-5">
        <LeftMenu />
      </div>
      <div className="w-full min-w-md md:max-w-md">middle side</div>
      <div className="w-full hidden md:block border-l">right side</div>
    </div>
  );
};

export default Page;
