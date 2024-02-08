<template>
  <div>
    <router-link to="/">Home</router-link> | 
    <router-link to="/profile">Profile</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';


</script>

<style scoped>

</style>