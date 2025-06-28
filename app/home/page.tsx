import React from "react";
import GlobalHeader from "@/app/components/GlobalHeader";
import GlobalNav from "../components/GlobalNav";
import { posts } from "@/data";
import PostCard from "../components/PostCard";

const Page = () => {
  console.log(posts);

  return (
    <>
      <GlobalHeader />
      <GlobalNav />
      <main className="flex flex-col items-center">
        {posts.map((post, index) => {
          return <PostCard post={post} key={index} />;
        })}
      </main>
    </>
  );
};

export default Page;
