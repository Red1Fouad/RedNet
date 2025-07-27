"use client";
import React, { use, useEffect } from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import * as Hi from "@heroicons/react/24/solid";
import { supabaseBrowser } from "@/supabase-utils/supabase-browser";
import { Like } from "@/types";
import { useLikes } from "@/hooks/useLikes";

const Likes = ({ post_id }: { post_id: string }) => {
  const { likes, hasLiked, toggleLike } = useLikes(post_id);
  return (
    <div>
      {" "}
      <Button
        onClick={async () => {
          await toggleLike();
        }}
        className="bg-transparent cursor-pointer"
        size="icon"
        variant="secondary"
      >
        {hasLiked ? (
          <Hi.HeartIcon className="w-5 h-5 text-red-500" />
        ) : (
          <Heart className="w-5 h-5 " />
        )}
        {!!likes.length && <span className="text-xs">{likes.length}</span>}
      </Button>
    </div>
  );
};

export default Likes;
