import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

const RightMenu = () => {
  return (
    <div className="max-w-64">
      <SearchBar />
      <ul className="space-y-1 mt-3 border-b pb-3">
        <li>Discover</li>
        <li>Following</li>
      </ul>
      <div className="mt-3">
        <p className="text-primary text-xs">
          <Link className="hover:underline" href={""}>
            Comments
          </Link>
          {" · "}
          <Link className="hover:underline" href={""}>
            Private
          </Link>{" "}
          {" · "}
          <Link className="hover:underline" href={""}>
            General Conditions
          </Link>
          {" · "}
          <Link className="hover:underline" href={""}>
            Help
          </Link>
          {" · "}
          <Link className="hover:underline" href={""}>
            Copyright © {new Date().getFullYear()} RedNet - All rights reserved.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RightMenu;
