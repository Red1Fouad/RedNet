import React from "react";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalNav from "@/components/GlobalNav";
import PostCard from "@/components/PostCard";
import { supabaseServer } from "@/supabase-utils/supabase-server";

const Page = async () => {
  const supabase = await supabaseServer();
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching posts:", error);
  }
  console.log(posts);

  return (
    <>
      <GlobalHeader />
      <GlobalNav />
      <main className="flex flex-col items-center">
        {posts?.map((post, index) => {
          return <PostCard post={post} key={index} />;
        })}
      </main>
    </>
  );
};

export default Page;
