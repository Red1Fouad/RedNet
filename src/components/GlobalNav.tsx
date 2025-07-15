import Link from "next/link";
import React from "react";

const GlobalNav = () => {
  return (
    <div className="border-b pb-2 sticky top-0 background-custom ">
      <ul className="flex justify-between ">
        <li className="w-full text-center ">
          <Link className="border-b-3 font-bold border-primary pb-2" href={""}>
            Discover
          </Link>
        </li>
        <li className="w-full text-center ">
          <Link
            className="border-b-3 font-bold border-primary text-muted-foreground pb-2"
            href={""}
          >
            Following
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GlobalNav;
