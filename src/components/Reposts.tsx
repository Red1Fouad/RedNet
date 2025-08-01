"use client";
import React from "react";
import { Button } from "./ui/button";
import { Repeat2 } from "lucide-react";
import { useReposts } from "@/hooks/useReposts";

const Reposts = ({ post_id }: { post_id: string }) => {
  const { reposts, hasReposted, toggleRepost } = useReposts(post_id);
  return (
    <Button
      onClick={toggleRepost}
      className="bg-transparent cursor-pointer"
      size="icon"
      variant="secondary"
    >
      {hasReposted ? (
        <Repeat2 className="w-5 h-5 text-green-500" />
      ) : (
        <Repeat2 className="w-5 h-5" />
      )}
      {!!reposts.length && (
        <span className="ml-1 text-xs">{reposts.length}</span>
      )}
    </Button>
  );
};

export default Reposts;
