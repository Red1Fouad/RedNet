import Image from "next/image";
import React from "react";

const UserComponent = () => {
  return (
    <div className="group">
      <div className="flex items-center space-x-2 group-hover:bg-accent rounded-full p-2 cursor-pointer">
        <div className="rounded-full w-10 h-10 overflow-hidden scale-125 group-hover:scale-100 transition-all duration-150">
          <Image
            width={100}
            height={100}
            alt="user"
            src={"/assets/user/icon.jpg"}
          />
        </div>
        <div className="group-hover:block hidden">
          <p className="font-semibold">Red1</p>
          <p className="text-xs">red1@rednet.com</p>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
