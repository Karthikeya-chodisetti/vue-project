<script setup>
  defineProps({
    user: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div class="userCard">

    <div class="image">
      <img :src="`https://i.pravatar.cc/300?img=${user.id}`" />
    </div>

    <div class="info">
      <p class="name"> {{ user.name }}</p>
      <p class="email"> {{ user.email }}</p>
    </div>
    
  </div>
</template>

<style scoped>
  .userCard{
    background:#ffffff;
    border:1px solid #9ccfbf;
    border-radius:14px;
    padding:14px;
    width:100%;
    max-width:220px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .image img{
    width:80px;
    height:80px;
    border-radius:50%;
    object-fit:cover;
  }

  .info .name{
    font-weight:bold;
    margin:5px 0 0 0;
  }

  .info .email{
    font-size:0.9rem;
    color:#555;
  }
</style>
