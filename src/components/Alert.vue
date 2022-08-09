<script setup>
let props = defineProps({
  title: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'info',
  },
  show: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div v-if="props.show" class="alert" :class="props.type" data-component="alert">
    <h3>{{ props.title }}</h3>
    <p data-component="message">{{ props.message }}</p>
  </div>
</template>

<style scoped>
.alert {
  background-color: #fff;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  box-shadow: 0 0 3px lightgray;
}

.ERROR {
  background-color: #fcc;
}

.SUCCESS {
  background-color: #cfc;
}
</style>
