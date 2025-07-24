"use client";
import React, { use, useEffect } from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import * as Hi from "@heroicons/react/24/solid";
import { supabaseBrowser } from "@/supabase-utils/supabase-browser";
import { Like } from "@/types";

const Likes = ({ likes, post_id }: { likes: Like[]; post_id: string }) => {
  const [hasLiked, setHasLiked] = React.useState<boolean | null>(null);
  const supabase = supabaseBrowser();

  const sendLike = async () => {
    const user = await supabase.auth.getUser();
    if (!user.data?.user) {
      console.error("User not authenticated");
      return;
    }
    if (!hasLiked) {
      const { error } = await supabase
        .from("likes")
        .insert([{ post_id: post_id, user_id: user.data.user.id }])
        .select();
      if (error) {
        console.error("Error sending like:", error);
      }
    } else {
      const { error } = await supabase
        .from("likes")
        .delete()
        .eq("post_id", post_id)
        .eq("user_id", user.data.user.id);
      if (error) {
        console.error("Error removing like:", error);
      }
    }
  };
  console.log("User likes:", hasLiked);
  useEffect(() => {
    const checkLikes = async () => {
      const user = await supabase.auth.getUser();
      console.log("Checking likes for user:", user.data?.user?.id);

      setHasLiked(likes.some((like) => like.user_id === user.data?.user?.id));
    };

    const channel = supabase
      .channel("likes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "likes" },
        (payload) => {
          console.log("New like received:", payload);

          checkLikes();
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [hasLiked, likes, supabase]);

  return (
    <div>
      {" "}
      <Button
        onClick={sendLike}
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
