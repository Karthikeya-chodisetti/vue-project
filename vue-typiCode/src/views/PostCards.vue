<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePostsStore } from "@/stores/posts";
import { useUsersStore } from "@/stores/users";
import UserCard from "@/components/UserCard.vue";
import PostCard from "@/components/PostCard.vue";

import Swal from "sweetalert2";


const postsStore = usePostsStore();
const usersStore = useUsersStore();
const router = useRouter();

const openPostId= ref(null);
const newPost=ref({ title:"", body:"" });

onMounted(async () => {
  await postsStore.fetchPosts();
  if(!usersStore.users.length) {
    await usersStore.fetchUsers();
  }

});

const openComments = (post) => {
  postsStore.setPost(post);
  router.push(`/cards/posts/${post.id}/comments`);
};

const toggleUserCard =(postId) => {
  openPostId.value = openPostId.value === postId ? null : postId;
};

const createPost = async () => {

  const {value: formValues} = await Swal.fire({
    title:'Create New Post',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Title">'+
      '<textarea id="swal-input2" class="swal2-textarea" placeholder="Body"></textarea>',

    showCloseButton:true,

    preConfirm: () => {

      const title=document.getElementById('swal-input1').value;
      const body=document.getElementById('swal-input2').value;

      return { title,body };
    },
  });

  if(formValues){
    Swal.fire({
      icon:"success",
      title:"Post Created",
      html:`<strong>Title:</strong> ${formValues.title} <br> <strong>Body:</strong> ${formValues.body}`,
      timer:2500,
    });
    newPost.value ={ title: "", body: "" };
  }
};


</script>

<template>
  <div class="heading">
    <h1>All Posts</h1>

    <button class="create-btn" @click="createPost">Create Post</button>
  </div>
  <div class="grid">
    <div
      v-for="post in postsStore.posts"
      :key="post.id"
      class="card"
    >
      <div @click="openComments(post)">
        <PostCard :post="post" />
      </div>

      <div class="info"> Created by:
        <span class="link" @click.stop="toggleUserCard(post.id)">
          {{ usersStore.users.find(u => u.id===post.userId).name }}
        </span>
      </div>

      <div v-if="openPostId === post.id" class="userPhoto">
        <UserCard :user="usersStore.users.find(u => u.id === post.userId)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:20px;
}

.create-btn{
  padding:8px 14px;
  border:none;
  border-radius:8px;
  background:#0ff0a9;
  color:white;
  font-weight:600;
  cursor:pointer;
}

.create-btn:hover{
  background:#014d35;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));
  gap:20px;
}

.card{
  padding:12px;
  border:1px solid #ddd;
  border-radius:14px;
  background:#fff;
  cursor:pointer;
}

.info{
  text-align:right;
  margin-top:6px;
  font-size:0.9rem;
}

.link{
  color:rgb(97, 179, 206);
  font-weight:bold;
  cursor:pointer;
}

.userPhoto{
  margin-top:10px;
  display:flex;
  justify-content:center;
}

</style>
