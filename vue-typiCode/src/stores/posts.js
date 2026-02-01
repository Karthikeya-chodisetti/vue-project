import { defineStore } from "pinia";
import api from "@/services/api";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
    currPost: null,
  }),

  actions: {
    async fetchPostsByUser(userId) {
      const { data }= await api.get("/posts" ,{ params:{userId} });
      this.posts = data;
    },

    async fetchPostById(postId) {
      const { data } = await api.get(`/posts/${postId}`);
      this.currPost = data;
    },

    setPost(post) {
      this.currPost = post;
    },
  },
});
