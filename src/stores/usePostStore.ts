import { PostType } from "@/types";
import { create } from "zustand";

type postsListStore = {
  postsList: PostType[];
  loading: boolean;
  error: string | null;
  setPostsList: (postsList: PostType[]) => void;
  addPost: (post: PostType) => void;
  updatePost: (post: PostType) => void;
  removePost: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const usePostStore = create<postsListStore>((set) => ({
  postsList: [],
  loading: false,
  error: null,
  setPostsList: (postsList) => set({ postsList }),
  addPost: (post) =>
    set((state) => ({ postsList: [post, ...state.postsList] })),
  updatePost: (post) =>
    set((state) => ({
      postsList: state.postsList.map((p) =>
        p.id === post.id ? { ...p, ...post } : p
      ),
    })),
  removePost: (id) =>
    set((state) => ({ postsList: state.postsList.filter((p) => p.id !== id) })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
