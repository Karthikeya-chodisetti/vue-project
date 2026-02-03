<script setup>
  import { useRouter } from "vue-router";

  const router=useRouter();
</script>

<template>
  <aside class="sidebar">
    <button @click="router.push('/cards/users')">Users</button>
    <button @click="router.push('/cards/posts')">Posts</button>
  </aside>
</template>

<style scoped>
.sidebar{
  width:150px;
  border-right: 1px solid black;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 8px;
  cursor: pointer;
}
</style>
