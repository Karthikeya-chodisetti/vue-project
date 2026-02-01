import { defineStore } from "pinia";
import api from "@/services/api"

export const useUsersStore = defineStore("user", {
  state: () => ({
    users: [],
    currUser: null,
  }),

  actions: {
    async fetchUsers() {
      const { data } = await api.get("/users");
      this.users =  data;
    },

    // async fetchUserById(id) {
    //   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    //   this.currUser = await res.json();
    // },

    setUser(user) {
      if (user) {
        this.currUser = user;
        return;
      }
      this.currUser = null;
    },
  },
});
