import { defineStore } from "pinia";
import api from "@/services/api"

export const useUsersStore = defineStore("user", {
  state: () => ({
    users: [],
    currUser: null,
  }),

  actions: {
    async fetchUsers() {
      const res=await api.get("/users");
      this.users=res.data;
    },

    async fetchUserById(id) {
      const res = await api.get(`/users/${id}`);
      this.currUser = res.data;
    },

    setUser(user) {
      if (user) {
        this.currUser = user;
        return;
      }
      this.currUser = null;
    },
  },
});
