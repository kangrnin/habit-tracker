<template>
  <div class="cursor-pointer">
    <i
      class="text-xl fa fa-check-circle mr-1.5 transition-all ease-in"
      :class="checked ? 'text-blue-400' : 'text-gray-400'"
    ></i>
    <span
      class="text-lg select-none transition-all ease-in"
      :class="checked && 'text-gray-300 line-through'"
      >{{ name }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    checked: Boolean,
  },
}
</script>
