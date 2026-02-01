<!-- <script setup>
 import { ref , onMounted} from "vue";

 const photos = ref([])
 const posts = ref([])

 onMounted(async () => {
  const result=await fetch("https://jsonplaceholder.typicode.com/photos");
  const data=(await result.json())
  photos.value=data.splice(0,20);
});

  onMounted(async () => {
  const result2=await fetch("https://jsonplaceholder.typicode.com/posts");
  const data=(await result2.json())
  posts.value=data.splice(0,20);
});

const deletePost= async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE"
  });
  posts.value = posts.value.filter((p) => p.id !== id);
};

const deletePic= async (id) => {
  await fetch('https://jsonplaceholder.typicode.com/photos/'+'id', {
    method: "DELETE"
  });
  photos.value = photos.value.filter(p => p.id !== id);
};

const  updatePost=async (post) =>{
  await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}` ,{
    method:"PUT",
    body:JSON.stringify(post)
  });
}

</script>

<template>
  <h1>Photos  </h1>

  <div v-for="pic in photos" :key="pic.id">
    <input v-model="pic.id" />
    <input v-model="pic.albumId" />
    <input v-model="pic.title" />
    <input v-model="pic.url" />
    <input v-model="pic.thumbnailUrl" />
    <button @click="deletePic(pic.id)">delete</button>
  </div>

  <h1>Posts </h1>
  <div v-for="post in posts" :key="post.id">
    <input v-model="post.id" />
    <input v-model="post.userId" />
    <input v-model="post.title" />
    <input v-model="post.body" />
    <button @click="updatePost(post)">update</button>
    <button @click="deletePost(post.id)">delete</button>
  </div>

</template>

<style scoped>
</style> -->



<!-- <script setup>
  import { ref,onMounted } from "vue";
  const users = ref([])
  const posts = ref({})

  onMounted(async () => {
    const result=await fetch("https://jsonplaceholder.typicode.com/users");
    users.value=await result.json()
  });

  const showPosts= async (id) => {
  if (posts.value[id]) {
    delete posts.value[id];
    return;
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const userPosts= await res.json();

  posts.value[id] = userPosts;
};


</script>

<template>
  <h1> USERS </h1>

  <div v-for="user in users" :key="user.id">
    <input v-model="user.id" disabled/>
    <input v-model="user.username" readonly/>
    <button @click="showPosts(user.id)"> {{ posts[user.id] ? "Hide Posts" : "Show Posts" }} </button>

    <div v-if="posts[user.id]">
      <div v-for="post in posts[user.id]" :key="post.id">
        <h4> {{ post.id-((user.id-1)*10)}}</h4>
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </div>
    </div>

  </div>

</template> -->


<template>
  <router-view />
</template>
