import React from "react";
import LeftMenu from "@/app/components/LeftMenu";
import GlobalHeader from "@/app/components/GlobalHeader";
import GlobalNav from "../components/GlobalNav";
import { posts } from "@/data";
import PostCard from "../components/PostCard";

const Page = () => {
  console.log(posts);

  return (
    <div className="flex h-screen">
      <div className="w-full hidden md:flex justify-end border-r p-5">
        <LeftMenu />
      </div>
      <div className="w-full min-w-md md:max-w-md overflow-y-scroll no-scroll">
        <GlobalHeader />
        <GlobalNav />
        <main>
          {posts.map((post, index) => {
            return <PostCard key={index} />;
          })}
        </main>
      </div>
      <div className="w-full hidden md:block border-l">right side</div>
    </div>
  );
};

export default Page;
