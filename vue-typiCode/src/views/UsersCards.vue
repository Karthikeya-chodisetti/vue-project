<script setup >
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUsersStore } from "@/stores/users";

import UserCard from "@/components/UserCard.vue";

const router = useRouter();
const userStore = useUsersStore();

onMounted(() => {
  userStore.fetchUsers();
});

const openPosts = (user) => {
  userStore.setUser(user);
  router.push(`/cards/users/${user.id}/posts`);
};
</script>

<template>
  <h1 class="title">USERS</h1>

  <div class="grid">
    <div
      class="card"
      v-for="user in userStore.users"
      :key="user.id"
    >
      <UserCard :user="user" />

      <button class="posts-btn" @click="openPosts(user)">
        Show Posts
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

  .card:hover{
    transform:scale(1.04);
    background:#e8f6ef;
    box-shadow:5px 5px 20px #2a2a2a;
  }


  .posts-btn {
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

  .card:hover .posts-btn {
    opacity:1;
  }

  .posts-btn:hover {
    background:#445c49;
  }
</style>
