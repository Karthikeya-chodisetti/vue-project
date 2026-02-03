import { defineStore } from "pinia";
import api from "@/services/api";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
    currPost: null,
  }),

  actions: {
    async fetchPosts() {
      const response = await api.get("/posts");
      this.posts = response.data;
    },
    
    async fetchPostsByUser(userId) {
      const response = await api.get("/posts", { params: { userId } });
      this.posts = response.data;
    },

    async fetchPostById(postId) {
      const res = await api.get(`/posts/${postId}`);
      this.currPost = res.data;
    },

    setPost(post){
      if(post){
        this.currPost = post;
        return;
      }
      this.currPost=null;
    },
  },
});
