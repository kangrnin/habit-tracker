<template>
  <div>
    <h2>Habit List</h2>
    <div
      v-for="habit in habits"
      :key="habit.id"
      class="mt-2.5 nm-flat-slate-100 p-2 rounded flex justify-between"
    >
      <div>
        <input
          type="text"
          class="bg-transparent focus:outline-none"
          v-model="habit.name"
        />
      </div>
      <div>
        <DaySelector
          :selectedDays="habit.days"
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
