<template>
  <div class="mx-2 inline text-center">
    <div
      v-for="day in daysInWeek"
      :key="day.id"
      class="mx-1.5 inline cursor-pointer rounded-full text-xl"
      :class="selectedDays.includes(day) ? 'text-blue-400' : 'text-gray-300'"
      @click="$emit('toggle-day', day)"
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
