<script setup>
  import AppSidebar from "./AppSidebar.vue";
</script>

<template>
  <div class="layout">
    <AppSidebar /> 
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display:flex;
  height:100vh;
}

.content {
  flex:1;
  padding:16px;
  overflow:auto;
}
</style>
