import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layout/MainLayout.vue";

import UsersCards from "@/views/UsersCards.vue";
import UserPostsCards from "@/views/UserPostsCards.vue";
import PostCommentsCards from "@/views/PostCommentsCards.vue";
import PostCards from "@/views/PostCards.vue";



const routes = [
  {
    path:"/",
    component: MainLayout,
    children:[
      { path: "cards/users", name: "UsersCards", component: UsersCards },

      {
        path: "cards/users/:id/posts",
        name: "UserPostsCards",
        component: UserPostsCards,
      },
      {
        path: "cards/posts/:pId/comments",
        name: "PostCommentsCards",
        component: PostCommentsCards,
      },
      {
        path: "cards/posts",
        name: "PostsCards",
        component: PostCards,
      },
    ]
  }


];

export default createRouter({
  history: createWebHistory(),
  routes,
});
