<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { useUsersStore } from "@/stores/users";
import { usePostsStore } from "@/stores/posts";
import { useCommentsStore } from "@/stores/comments";

import UserCard from "@/components/UserCard.vue";
import PostCard from "@/components/PostCard.vue";

const usersStore = useUsersStore();
const postsStore = usePostsStore();
const commentsStore = useCommentsStore();

const route = useRoute();

onMounted(async () => {
  if (!postsStore.currPost) {
    await postsStore.fetchPosts();
    postsStore.setPost(
      postsStore.posts.find(p => p.id == route.params.id)
    );
  }

  await commentsStore.fetchCommentsByPost(route.params.pId);

  if (!usersStore.currUser) {
    await usersStore.fetchUsers();
    usersStore.setUser(
      usersStore.users.find(u => u.id == route.params.id)
    );
  }
});
</script>

<template>
  <div class="top" v-if="postsStore.currPost && usersStore.currUser">
    <div class="userRight shrink"><UserCard :user="usersStore.currUser" /></div>
    <div class="postLeft shrink"><PostCard :post="postsStore.currPost" /></div>
  </div>

  <h2 class="title">Comments</h2>

  <div>
    <div v-for="c in commentsStore.comments" :key="c.id">
      <h4>CommentId: {{ c.id }}</h4>

      <div class="text">
      <p> <span>Email:</span> {{ c.email }}</p>
      <p> <span>Name:</span> {{ c.name }}</p>
      <p> <span>Body:</span> {{ c.body }}</p>
      </div>

      <hr />
    </div>
  </div>
</template>


<style scoped>
  .top{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items:start;
    gap:20px;
    margin-bottom: 25px;
  }

  .shrink{
    align-self: flex-start;
  }

  .shrink>* {
    height: auto;
  }

  .userRight{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
    font-family: Arial, Helvetica, sans-serif;
    grid-column: 2;
    justify-self: end;
  }

  .postLeft{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
    font-family: Arial, Helvetica, sans-serif;
    grid-column: 1;
    justify-self: start;
  }

  .text span{
    font-weight:bold;
  }

  .title{
    text-align:center;
    font-family:sans-serif;
    color:cornflowerblue;
    margin:30px 0px;
    letter-spacing:2px;
  }

</style>
