<template>
  <router-link
    :to="to"
    class="transition-all ease-in hover:text-blue-400"
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
