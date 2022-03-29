<template>
  <div>
    <h2>Habit List</h2>
    <div
      v-for="habit in habits"
      :key="habit.id"
      class="mt-2.5 nm-flat-slate-100 p-2 rounded flex justify-between"
    >
      <div>{{ habit.name }}</div>
      <div>
        {{ habit.days }}
        {{ habit.isEnabled }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    habits: Array,
  },
}
</script>

<style></style>
