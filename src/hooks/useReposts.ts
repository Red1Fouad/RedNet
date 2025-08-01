import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/supabase-utils/supabase-browser";

export function useReposts(postId: string) {
  const [reposts, setReposts] = useState<any[]>([]);
  const [hasReposted, setHasReposted] = useState<boolean | null>(null);
  const supabase = supabaseBrowser();

  const checkIfReposted = async () => {
    const { data: userData } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("reposts")
      .select("*")
      .eq("post_id", postId)
      .eq("user_id", userData.user?.id)
      .single();
    if (error && error.code !== "PGRST116") {
      console.error("Error checking repost status:", error);
    } else {
      setHasReposted(!!data);
    }
  };

  const fetchReposts = async () => {
    const { data, error } = await supabase
      .from("reposts")
      .select("*")
      .eq("post_id", postId);
    if (error) {
      console.error("Error fetching reposts:", error);
    } else {
      setReposts(data);
    }
  };

  async function toggleRepost() {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return;
    if (hasReposted) {
      const { error } = await supabase
        .from("reposts")
        .delete()
        .eq("post_id", postId)
        .eq("user_id", userData.user.id);
      if (error) {
        console.error("Error removing repost:", error);
        return;
      } else {
        setReposts((prevReposts) =>
          prevReposts.filter((repost) => repost.user_id !== userData.user.id)
        );
      }
      setHasReposted(false);
    } else {
      const { error } = await supabase
        .from("reposts")
        .insert([{ post_id: postId, user_id: userData.user.id }]);
      if (error) {
        console.error("Error adding repost:", error);
      } else {
        setReposts((prevReposts) => [
          ...prevReposts,
          { post_id: postId, user_id: userData.user.id },
        ]);
      }
      setHasReposted(true);
    }
  }

  useEffect(() => {
    fetchReposts();
    checkIfReposted();
  }, [postId]);

  return { reposts, hasReposted, toggleRepost, setReposts };
}
