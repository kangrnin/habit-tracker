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
        <DaySelector
          :selectedDays="habit.days"
          @toggle-day="(day) => $emit('toggle-habit-day', habit.name, day)"
        />
        {{ habit.isEnabled }}
      </div>
    </div>
  </div>
</template>

<script>
import DaySelector from '../components/DaySelector.vue'

export default {
  name: 'Home',
  components: {
    DaySelector,
  },
  props: {
    habits: Array,
  },
}
</script>
