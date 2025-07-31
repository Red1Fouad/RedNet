import React from "react";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalNav from "@/components/GlobalNav";
import { supabaseServer } from "@/supabase-utils/supabase-server";
import PostList from "@/components/PostList";
import { PostType } from "@/types";

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
        <PostList posts={posts as PostType[]} />
      </main>
    </>
  );
};

export default Page;
