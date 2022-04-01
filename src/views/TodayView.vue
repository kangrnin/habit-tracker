<template>
  <div>
    <h2 class="mb-4 text-xl">Habits for today</h2>
    <div>
      <CheckListItem
        v-for="habit in habits.filter((x) => x.days.includes(todayInWeek))"
        :key="habit.id"
        :name="habit.name"
        :checked="habit.doneDates.includes(todayDate)"
        class="mb-0.5"
        @click="$emit('toggle-habit-done', habit, todayDate)"
      ></CheckListItem>
    </div>
  </div>
</template>

<script>
import CheckListItem from '../components/CheckListItem.vue'

export default {
  name: 'TodayView',
  props: {
    habits: Array,
  },
  components: {
    CheckListItem,
  },
  computed: {
    todayInWeek() {
      return new Date().toString().split(' ')[0]
    },
    todayDate() {
      return new Date().toDateString()
    },
  },
}
</script>
