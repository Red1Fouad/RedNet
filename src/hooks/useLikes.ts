import { supabaseBrowser } from "@/supabase-utils/supabase-browser";
import { Like } from "@/types";
import { useEffect, useState } from "react";

export function useLikes(postId: string) {
  const [likes, setLikes] = useState<Like[]>([]);
  const [hasLiked, setHasLiked] = useState<boolean | null>(null);
  const supabase = supabaseBrowser();

  const checkIfLiked = async () => {
    const { data: userData } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("likes")
      .select("*")
      .eq("post_id", postId)
      .eq("user_id", userData.user?.id)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error checking like status:", error);
    } else {
      setHasLiked(!!data);
    }
  };

  const fetchLikes = async () => {
    const { data, error } = await supabase
      .from("likes")
      .select("*")
      .eq("post_id", postId);

    if (error) {
      console.error("Error fetching likes:", error);
    } else {
      setLikes(data);
    }
  };

  async function toggleLike() {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return;

    if (hasLiked) {
      // User has already liked the post, so we remove the like
      const { error } = await supabase
        .from("likes")
        .delete()
        .eq("post_id", postId)
        .eq("user_id", userData.user.id);
      if (error) {
        console.error("Error removing like:", error);
        return;
      } else {
        setLikes((prevLikes) =>
          prevLikes.filter((like) => like.user_id !== userData.user.id)
        );
      }
      console.log("user dislikes");
      setHasLiked(false);
    } else {
      // User has not liked the post, so we add a like
      const { error } = await supabase
        .from("likes")
        .insert([{ post_id: postId, user_id: userData.user.id }]);
      if (error) {
        console.error("Error adding like:", error);
      } else {
        setLikes((prevLikes) => [
          ...prevLikes,
          { post_id: postId, user_id: userData.user.id } as Like,
        ]);
      }
      setHasLiked(true);
      console.log("user likes");
    }
    console.log(likes);
  }

  useEffect(() => {
    fetchLikes();
    checkIfLiked();
    console.log(hasLiked);
  }, [postId]);

  return { likes, hasLiked, toggleLike, setLikes };
}
