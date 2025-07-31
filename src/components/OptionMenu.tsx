"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePostStore } from "@/stores/usePostStore";
import { supabaseBrowser } from "@/supabase-utils/supabase-browser";
import { Ellipsis } from "lucide-react";

export function OptionMenu({ post_id }: { post_id: string }) {
  const { removePost } = usePostStore();
  const supabase = supabaseBrowser();
  const deletePost = async (post_id: string) => {
    const { error } = await supabase.from("posts").delete().eq("id", post_id);
    if (error) {
      console.error("Error deleting post:", error);
    }
    removePost(post_id);
    console.log("Post deleted successfully");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-transparent cursor-pointer"
          size="icon"
          variant="secondary"
        >
          <Ellipsis className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => deletePost(post_id)}>
            Delete
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Edit
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
