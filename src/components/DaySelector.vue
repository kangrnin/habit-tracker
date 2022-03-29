<template>
  <div class="inline text-center mx-2">
    <div
      v-for="day in daysInWeek"
      :key="day.id"
      class="inline rounded-full text-xl mx-1.5"
      :class="selectedDays.includes(day) ? 'text-blue-400' : 'text-gray-300'"
      @click="toggleSelectedDay(day)"
    >
      {{ firstLetter(day) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaySelector',
  props: {
    selectedDays: {
      type: Array,
    },
  },
  data() {
    return {
      daysInWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    }
  },
  methods: {
    firstLetter(word) {
      return word[0]
    },
  },
}
</script>
