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
  <h1 class="title"> USERS </h1>

  <div class="grid">
    <div
      v-for="(user, i) in userStore.users"
      :key="i"
      class="card"
      @click="openPosts(user)"
    >
      <UserCard :user="user" />

    </div>
  </div>
</template>


<style scoped>
.title {
  text-align: center;
  font-family: sans-serif;
  color: cornflowerblue;
  margin-bottom: 30px;
  letter-spacing: 2px;
}
.grid{
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  gap:30px;
}

.card{
  position: relative;
  background:transparent;
  padding:10px;
  border-radius:15px;

  transition: transform 0.25s ease, background-color 0.25s ease ;
  display: flex;
  justify-content: center;
  cursor:pointer;
}

.card:hover {
  transform: translateY(-4px);
  background:lightgrey;
}

</style>
