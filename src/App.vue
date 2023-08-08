<template>
  <div id="nav">
    <router-link to="/" class="p-6">Home</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/kai" class="p-6">KAI</router-link>
  </div>
  <Navbar></Navbar>
  <router-view class="mt-20"/>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
</script>