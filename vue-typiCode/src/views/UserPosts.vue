<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const posts = ref([]);

onMounted(async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${route.params.id}`
  );
  const postData = await res.json();

  for (const post of postData) {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    );
    post.cmnt = await result.json();
  }
  posts.value = postData;
});
</script>

<template>
  <button @click="router.back()">Back</button>

  <h1>User {{ route.params.id }} Posts</h1>

  <div v-for="post in posts" :key="post.id">
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>

    <h3>Comments</h3>

    <div v-for="comment in post.cmnt" :key="comment.id">
      <p>{{ comment.body }}</p>
    </div>

    <hr />
  </div>
</template>
