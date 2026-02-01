<script setup>
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUsersStore } from "@/stores/users.js";
import { usePostsStore } from "@/stores/posts.js";

import UserCard from "@/components/UserCard.vue";
import PostCard from "@/components/PostCard.vue";

const userStore = useUsersStore();
const postsStore = usePostsStore();

const route = useRoute();
const router = useRouter();

const currUser = computed(() => {
  return userStore.currUser;
});

onMounted(async () => {
  if (!userStore.currUser) {
    await userStore.fetchUsers();
    userStore.setUser(
      userStore.users.find(u => u.id == route.params.id)
    );
  }
  await postsStore.fetchPostsByUser(route.params.id);
});

const openCmnts = (post) => {
  postsStore.setPost(post);
  router.push(`/cards/posts/${post.id}/comments`);
};
</script>


<template>
  <button @click="router.back()">Back</button>

  <div class="tr" v-if="currUser">
    <UserCard :user="currUser" />
  </div>

  <h2 class="title">Posts</h2>
  <div class="grid">
    <div
      class="card"
      v-for="post in postsStore.posts"
      :key="post.id"
    >
      <PostCard :post="post" />

      <button class="cmnts-btn" @click="openCmnts(post)">
        show comments
      </button>
    </div>
  </div>
</template>


<style scoped>
  .title {
    text-align:center;
    font-family:sans-serif;
    color:cornflowerblue;
    margin-bottom:30px;
    letter-spacing:2px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
  }

  .card {
    position:relative;
    background:white;
    padding:20px;
    border-radius:15px;
    overflow:hidden;
    transform:scale(1);
    transition:
      transform 0.5s,
      back-ground 0.5s,
      box-shadow 0.5s;
    box-sizing:border-box;
    }

  .tr{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .card:hover{
    transform:scale(1.04);
    background:#e3f4ab;
    box-shadow:5px 5px 20px #2a2a2a;
  }


  .cmnts-btn {
    opacity:0;
    margin-top:15px;
    width:100%;
    padding:10px 0;
    border:none;
    border-radius:8px;
    background:#000;
    color:#55a79e;
    font-weight:bold;
    cursor:pointer;
    transition:opacity 0.3s, transform 0.3s;
  }

  .card:hover .cmnts-btn {
    opacity:1;
  }

  .cmnts-btn:hover {
    background:#445c49;
  }
</style>
