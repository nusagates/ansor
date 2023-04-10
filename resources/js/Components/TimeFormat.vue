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
    formatedDate = date.getHours() + ':' + date.getMinutes()
  } else {
    formatedDate = props.time
  }
  return formatedDate
})
</script>

<style scoped>

</style>