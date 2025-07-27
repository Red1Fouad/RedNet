import { supabaseBrowser } from "@/supabase-utils/supabase-browser";
import { useEffect, useState } from "react";

export function usePost(postId: string) {
  const [post, setPost] = useState(null);
  const supabase = supabaseBrowser();

  const deletePost = async () => {
    const { error } = await supabase.from("posts").delete().eq("id", postId);
    if (error) {
      console.error("Error deleting post:", error);
    }
    console.log("Post deleted successfully");
  };

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", postId)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(data);
      }
    };

    fetchPost();
  }, [postId, supabase]);

  return { post, deletePost };
}
