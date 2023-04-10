<template>
  {{ formatedDate }}
</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps(['time'])
const formatedDate = computed(() => {
  const regex = /^\d{2}:\d{2}:\d{2}$/;
  let formatedDate;
  if (regex.test(props.time)) {
    const date = new Date(`2023-04-10 ${props.time}`)
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    formatedDate = hour + ':' + minute
  } else {
    formatedDate = props.time
  }
  return formatedDate
})
</script>

<style scoped>

</style>