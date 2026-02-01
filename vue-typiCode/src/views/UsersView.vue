<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router= useRouter();
const users= ref([]);

onMounted(async () => {
  const res= await fetch("https://jsonplaceholder.typicode.com/users");
  users.value= await res.json();
});

const showPosts= (id) => {
  router.push(`/users/${id}/posts`);
};

</script>

<template>

  <h1>USERS</h1>

  <div v-for="user in users" :key="user.id">
    <input v-model="user.id" disabled />
    <input :value="user.username" readonly />
    <button @click="showPosts(user.id)"> Show Posts </button>
  </div>
</template>
