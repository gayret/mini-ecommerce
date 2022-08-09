<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  max-width: 1600px;
  margin-inline: auto;
  padding: 0 1em;
  display: grid;
  grid-template-rows: max-content auto max-content;
}
</style>
