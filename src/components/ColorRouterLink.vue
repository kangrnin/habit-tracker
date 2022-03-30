<template>
  <router-link
    :to="to"
    class="hover:text-blue-400 transition-all ease-in"
    :class="$route.path == to ? 'text-blue-400' : 'text-gray-300'"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'ColorRouterLink',
  props: {
    to: String,
  },
}
</script>
