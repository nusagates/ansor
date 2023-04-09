<template>
  <span v-if="type==='time'">
    {{ today.getHours() < 10 ? '0' + today.getHours() : today.getHours() }}:{{ today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes() }}
  </span>
  <span v-if="type==='date'">
    {{ today.toLocaleString('id-ID', {weekday: 'long'}) }}, {{ today.getDate() }} {{ today.toLocaleString('id-ID', {month: 'long'}) }}
    {{ today.getFullYear() }}
  </span>
</template>

<script setup>
import {ref} from "vue";

defineProps(['type'])
let today = ref(new Date())
setInterval(() => {
  today.value = new Date()
}, 1000)
</script>

<style scoped>

</style>