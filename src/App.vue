<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="relative w-screen h-screen pt-14 bg-slate-100">
    <div class="w-fit m-auto bg-slate">
      <Header />
      <router-view
        :habits="habits"
        @toggle-habit-day="toggleHabitDay"
        @toggle-habit-enabled="toggleHabitEnabled"
        @toggle-habit-done="toggleHabitDone"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: [Header, Footer],
  data() {
    return {
      habits: [
        {
          name: 'Workout at gym',
          days: ['Mon', 'Wed', 'Fri', 'Sat', 'Sun'],
          isEnabled: true,
          doneDates: [new Date().toDateString()],
        },
        {
          name: 'Daily journal',
          days: ['Mon', 'Tue', 'Wed', 'Fri', 'Sat', 'Sun'],
          isEnabled: true,
          doneDates: [],
        },
        {
          name: 'Study vue',
          days: ['Sat', 'Sun'],
          isEnabled: false,
          doneDates: [new Date().toDateString()],
        },
      ],
    }
  },
  methods: {
    toggleHabitDay(clickedHabitName, clickedDay) {
      const clickedHabit = this.habits.find((x) => x.name == clickedHabitName)
      if (clickedHabit.days.includes(clickedDay)) {
        clickedHabit.days = clickedHabit.days.filter((x) => x != clickedDay)
      } else {
        clickedHabit.days.push(clickedDay)
        clickedHabit.days = this.sortByDay(clickedHabit.days)
      }
      console.log(clickedHabitName, clickedDay)
      console.log(clickedHabit.days)
    },
    sortByDay(days) {
      const daysInWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      return days.sort((a, b) => daysInWeek.indexOf(a) > daysInWeek.indexOf(b))
    },
    toggleHabitEnabled(clickedHabitName) {
      const clickedHabit = this.habits.find((x) => x.name == clickedHabitName)
      clickedHabit.isEnabled = !clickedHabit.isEnabled
    },
    toggleHabitDone(habit, date) {
      if (habit.doneDates.includes(date)) {
        habit.doneDates = habit.doneDates.filter((x) => x != date)
      }
      else {
        habit.doneDates.push(date)
      }
    },
  },
}
</script>
