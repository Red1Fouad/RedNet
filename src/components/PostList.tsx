"use client";
import React, { use, useEffect } from "react";
import PostCard from "./PostCard";
import { PostType } from "@/types";
import { usePostStore } from "@/stores/usePostStore";

const PostList = ({ posts }: { posts: PostType[] }) => {
  const { postsList, setPostsList } = usePostStore();

  useEffect(() => {
    if (posts) {
      setPostsList(posts);
    }
  }, [posts, setPostsList]);

  return (
    <div>
      {postsList?.map((post, index) => {
        return <PostCard post={post} key={index} />;
      })}
    </div>
  );
};

export default PostList;
