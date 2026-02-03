import { defineStore } from "pinia";
import api from "@/services/api";

export const useCommentsStore = defineStore("comments", {
  state: () => ({
    comments: [],
  }),

  actions:{
    async fetchCommentsByPost(postId) {
      // move this to try catch
      const res = await api.get(`/comments?postId=${postId}`);
      this.comments = res.data;
    },
  },
});
