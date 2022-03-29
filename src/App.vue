<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="relative w-screen h-screen pt-14 bg-slate-100">
    <div class="w-fit m-auto bg-slate">
      <Header />
      <router-view
        class="nm-flat-slate-100-lg p-3 rounded-xl"
        :habits="habits"
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
        },
        {
          name: 'Daily journal',
          days: ['Mon', 'Tue', 'Wed', 'Fri', 'Sat', 'Sun'],
          isEnabled: true,
        },
        {
          name: 'Study vue',
          days: ['Sat', 'Sun'],
          isEnabled: false,
        },
      ],
    }
  },
}
</script>
