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
    <h4 class="pid" v-if="post.id">PostId: {{ post.id }}</h4>

    <p v-if="post.title"><span>Title:</span>{{ post.title }}</p>
    <p v-if="post.body"><span>Body:</span> {{ post.body }}</p>
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

  .pid{
    text-align:center;
    font-weight:bold;
    margin:0;
    padding-bottom:8px;
    border-bottom:1px solid #026143;
  }

  .text{
    padding:0 10px;
  }

  .text span{
    font-weight :bold;
  }
</style>

<!--

-->
