<script setup>
import { onMounted,ref } from "vue";
import { useRoute } from "vue-router";

import { useUsersStore } from "@/stores/users";
import { usePostsStore } from "@/stores/posts";
import { useCommentsStore } from "@/stores/comments";

const usersStore = useUsersStore();
const postsStore = usePostsStore();
const commentsStore = useCommentsStore();

const route = useRoute();
const person=ref(null);

const randomTime = () => {
  const hr=Math.floor(Math.random()*12)+1;
  const min=Math.floor(Math.random()*60);
  return `${hr}:${min} ${Math.random()>0.5 ? "AM":"PM"}`;
}

onMounted(async () => {
  const postId=route.params.pId;

  await postsStore.fetchPostById(postId);
  await commentsStore.fetchCommentsByPost(postId);

  const userId=postsStore.currPost.userId;
  await usersStore.fetchUserById(userId);

  person.value=usersStore.currUser;
});
</script>

<template>
  <h2 class="title"> Comments </h2>
  <div
    v-for="comment in commentsStore.comments"
    :key="comment.id"
    class="comment-card"
  >
    <span class="time"> {{ randomTime() }} </span>

    <div class="comments">

      <div class="user" v-if="person">
        <img class="avatar" :src="`https://i.pravatar.cc/300?img=${person.id}`" />
        <span class="name">{{ person.name }}</span>
      </div>

      <div class="body">
        <p>{{ comment.body }}</p>
        <p class="email">{{ comment.email }}</p>
      </div>

    </div>
  </div>

</template>


<style scoped>

.comment-card {
  position:relative;
  border:1px solid #ddd;
  padding:12px;
  border-radius:10px;
  margin-bottom:15px;
  background:#fff;
}

.comments{
  display:flex;
  gap:14px;
  margin-top:10px;
}

.user{
  width:80px;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
}

.avatar{
  width:48px;
  height:48px;
  border-radius:50%;
  object-fit:cover;
}

.name{
  margin-top:6px;
  font-size:0.8rem;
  font-weight:600;
  color:#026143;
}

.body{
  flex:1;
  font-size:0.95rem;
  line-height:1.4;
}

.time{
  position:absolute;
  top:8px;
  right:12px;
  font-size:0.8rem;
  color:#777;
}

</style>
