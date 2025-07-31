"use client";
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/supabase-utils/supabase-browser";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ImageIcon,
  ImagePlay,
  SmileIcon,
  SquarePen,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { usePostStore } from "@/stores/usePostStore";

export function PostForm() {
  const { addPost } = usePostStore();
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const supabase = supabaseBrowser();

  async function CreatePost() {
    const { user } = (await supabase.auth.getUser()).data;
    console.log("user: ", user);
    const { data, error } = await supabase
      .from("posts")
      .insert([{ content: content, user_id: user?.id }])
      .select()
      .single();
    if (error) {
      console.error("Error creating post:", error);
      return;
    }
    if (data) {
      addPost(data); // Add the new post to the store
      toast("Success!", { description: "Post created successfully." });
      setContent(""); // Clear the content after successful post creation
      setOpen(false); // Close the dialog after posting
    }

    console.log("Creating post with content:", content);
  }
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        <Button
          variant={"default"}
          className="rounded-full cursor-pointer text-white"
        >
          <SquarePen className="w-5 h-5" />
          <span>New Post</span>
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-md">
        <DialogHeader className="flex-row justify-between w-full">
          <DialogTitle className="sr-only">New Post</DialogTitle>
          <DialogClose asChild>
            <Button
              className="rounded-full cursor-pointer hover:bg-primary"
              type="button"
              variant="ghost"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={CreatePost}
            className="rounded-full cursor-pointer text-white"
            type="button"
            variant="default"
          >
            Post
          </Button>
        </DialogHeader>
        <div className="grid grid-cols-1">
          <div className="flex items-start gap-2">
            <Image
              src={"/assets/user/icon.jpg"}
              alt="user"
              height={50}
              width={50}
              className="rounded-full w-10 h-10"
            />
            <Textarea
              value={content}
              className=""
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <div className="flex items-center gap-2">
            <ImageIcon />
            <VideoIcon />
            <ImagePlay />
            <SmileIcon />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
