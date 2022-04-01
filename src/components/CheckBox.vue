<template>
  <div class="inline">
    <i
      class="fa fa-check text-xl"
      :class="isChecked ? 'text-blue-400' : 'text-gray-300'"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    isChecked: Boolean,
  },
}
</script>

<style></style>
