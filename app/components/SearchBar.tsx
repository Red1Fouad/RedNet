"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchBar = () => {
  const [focus, setFocus] = useState(false);
  console.log("Focus " + focus);

  return (
    <div className="group flex items-center h-9 bg-muted rounded-sm">
      <Search
        className={`${
          focus ? "" : "group-hover:text-white/80"
        } h-4 w-4 ml-3 mt-1 text-muted-foreground ${
          focus ? "text-primary" : ""
        }`}
      />
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="group-hover:border-muted-foreground/50 w-full h-full pl-9 -ml-7 rounded-sm border border-muted focus:border-primary focus:border-2 outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
