import { createRouter, createWebHistory } from "vue-router";
import UsersView from "@/views/UsersView.vue";
import UserPosts from "@/views/UserPosts.vue";

import UsersCards from "@/views/UsersCards.vue";
import UserPostsCards from "@/views/UserPostsCards.vue";
import PostCommentsCards from "@/views/PostCommentsCards.vue";

const routes = [
  {
    path: "/",
    name: "Users",
    component: UsersView,
  },
  {
    path: "/users/:id/posts",
    name: "UserPosts",
    component: UserPosts,
  },

  { path: "/cards/users", name: "UsersCards", component: UsersCards },

  {
    path: "/cards/users/:id/posts",
    name: "UserPostsCards",
    component: UserPostsCards,
  },

  {
    path: "/cards/posts/:pId/comments",
    name: "PostCommentsCards",
    component: PostCommentsCards,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
