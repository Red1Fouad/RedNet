"use client";
import React from "react";
import Button from "./Button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const DetailNav = () => {
  const router = useRouter();
  return (
    <div className="border-b p-2 sticky top-0 background-custom ">
      <ul className="flex justify-start">
        <li className="w-full flex items-center space-x-2">
          <Button
            onClick={() => router.push("/home")}
            type="icon"
            icon={<ArrowLeft />}
          />
          <span className="block font-bold pb-2 mt-1">Post</span>
        </li>
      </ul>
    </div>
  );
};

export default DetailNav;
