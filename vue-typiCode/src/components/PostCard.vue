<script setup>
defineProps({
  post:{
    type:Object,
    required:true
  }
})
</script>

<template>
  <div class="postCard">
    <div class="text">

    <p v-if="post.title" class="title">{{ post.title }}</p>
    <p v-if="post.body"> {{ post.body }}</p>

    </div>

  </div>
</template>

<style scoped>
  .postCard{
    background:transparent;
    padding:15px 0;
    color:black;
    border-style: solid;
    border-color:rgb(2, 97, 67);
    height:280px;
    display:flex;
    flex-direction:column;
  }

  .text{
    padding:0 10px;
  }

  .title{
    font-weight:bold;
  }
  
</style>

