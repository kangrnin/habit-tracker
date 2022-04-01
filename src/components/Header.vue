<template>
  <div class="mb-8 text-center">
    <h2 class="mb-6 text-2xl">Habit Tracker</h2>
    <div>
      <ColorRouterLink to="/" class="mr-5">Home</ColorRouterLink>
      <ColorRouterLink to="/about" class="mr-5">About</ColorRouterLink>
      <ColorRouterLink to="/today" class="mr-5">Today</ColorRouterLink>
      <ColorRouterLink to="/manage" class="mr-5">Manage</ColorRouterLink>
    </div>
  </div>
</template>

<script>
import ColorRouterLink from './ColorRouterLink.vue'

export default {
  name: 'Header',
  components: {
    ColorRouterLink,
  },
}
</script>

<style></style>
