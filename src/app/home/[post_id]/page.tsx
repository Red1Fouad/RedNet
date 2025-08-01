import DetailNav from "@/components/DetailNav";
import PostCard from "@/components/PostCard";
import { supabaseBrowser } from "@/supabase-utils/supabase-browser";

const Page = async ({ params }: { params: Promise<{ post_id: string }> }) => {
  const { post_id } = await params;
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", post_id)
    .single();

  let content;
  if (error) content = <div>Error loading post.</div>;
  else if (!data) content = <div>Post not found.</div>;
  else
    content = (
      <PostCard
        post={{ ...data, image_url: data.image_url || data.imageURL || "" }}
      />
    );

  return (
    <div>
      <DetailNav />
      {content}
    </div>
  );
};

export default Page;
