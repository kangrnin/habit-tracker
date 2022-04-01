<template>
  <div>
    <h2 class="text-xl">Habit List</h2>
    <div
      v-for="habit in habits"
      :key="habit.id"
      class="mt-2.5 flex justify-between rounded p-2 nm-flat-slate-100"
    >
      <div class="w-fit">
        <input
          type="text"
          class="w-56 bg-transparent transition-all ease-in hover:nm-flat-slate-200 focus:outline-none focus:nm-flat-slate-200"
          v-model="habit.name"
        />
      </div>
      <div class="w-fit">
        <DaySelector
          :selectedDays="habit.daysInWeek"
          @toggle-day="(day) => $emit('toggle-habit-day', habit.name, day)"
        />
        <CheckBox
          :isChecked="habit.isEnabled"
          @click="$emit('toggle-habit-enabled', habit.name)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DaySelector from '../components/DaySelector.vue'
import CheckBox from '../components/CheckBox.vue'

export default {
  name: 'Home',
  components: {
    DaySelector,
    CheckBox,
  },
  props: {
    habits: Array,
  },
}
</script>
