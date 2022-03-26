<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="w-1/2 m-auto">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: [
    Header,
    Footer
  ]
}
</script>