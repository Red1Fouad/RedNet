import { Ellipsis, Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { supabaseServer } from "@/supabase-utils/supabase-server";
import Likes from "./Likes";
import { Like } from "@/types";

type PostCardProps = {
  post: {
    id: string;
    user_id: string;
    content: string;
    image_url?: string | null;
    created_at: string;
    updated_at: string;
  };
};

const PostCard = async ({ post }: PostCardProps) => {
  const supabase = await supabaseServer();
  // Ensure post.id is a string and matches the likes.post_id type
  const { data, error } = await supabase
    .from("likes")
    .select("*")
    .eq("post_id", post.id);
  if (error) {
    console.error("Error fetching likes:", error);
  }
  // console.log("Likes data for post", post.id, ":", data);

  return (
    <div className="flex border-b p-3 gap-3 items-start max-w-2xl w-full">
      <div>
        <div className="rounded-full w-10 h-10 overflow-hidden">
          <Image
            src={"/assets/user/icon.jpg"}
            alt="User"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="p-0 space-y-2 w-full">
        <div className="flex items-center -mt-2 gap-1">
          <span className="font-bold capitalize">User</span>
          <span className="font-light text-xs ml-2">
            {new Date(post.created_at).toLocaleString()}
          </span>
        </div>
        <Link href={`home/${post.id}`}>
          <p className="mb-2">{post.content}</p>
        </Link>
        {post.image_url && (
          <div className="rounded-lg overflow-hidden">
            <Image
              src={post.image_url}
              alt="Post image"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        )}
        <div className="flex justify-between">
          <Button className="bg-transparent" size="icon" variant="secondary">
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button className="bg-transparent" size="icon" variant="secondary">
            <Repeat2 className="w-5 h-5" />
          </Button>
          <Likes likes={data as Like[]} post_id={post.id} />
          <Button className="bg-transparent" size="icon" variant="secondary">
            {" "}
            <Share className="w-5 h-5" />
          </Button>
          <Button className="bg-transparent" size="icon" variant="secondary">
            {" "}
            <Ellipsis className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
