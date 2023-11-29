

<template>
  <NavBar />
  <RouterView />

  <!-- <RouterLink to="/">Home</RouterLink> -->

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/header/NavBar.vue'

</script>
