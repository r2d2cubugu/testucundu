<template>
  <div>
    <div  class=" flex justify-around">
    <!-- {{ userStore.name }} -->
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/postlist">Post list</RouterLink>
  </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useUserStore } from './stores/userStore';
let userStore = useUserStore()
</script>