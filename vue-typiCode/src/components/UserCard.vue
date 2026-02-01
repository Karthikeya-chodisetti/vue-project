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
    <div class="text">
    <h4 class="uid" v-if="user.id">UserId: {{ user.id }}</h4>
    <p v-if="user.name"> <span>Name:</span> {{ user.name }}</p>
    <p v-if="user.username"> <span>UserName:</span> {{ user.username }}</p>
    <p v-if="user.email"> <span>Email:</span> {{ user.email }}</p>
    </div>
  </div>
</template>

<style scoped>
.uid{
  text-align: center;
  font-weight: bold;
  margin: 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #026143;
}

.text{
  padding:0 10px;
}

.text span{
  font-weight :bold;
}

.userCard {
  background:transparent;
  padding:15px 0;
  color:black;
  border-style: solid;
  border-color:rgb(2, 97, 67);
  height:190px;
  display:flex;
  flex-direction:column;
}

</style>
