<template>
  {{formatedDate}}
</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps(['date'])
const formatedDate = computed(() => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  let formatedDate;
  if (regex.test(props.date)) {
    const date = new Date(props.date)
    formatedDate = date.toLocaleString('id-ID', {weekday: 'long'})
    formatedDate += ', '+date.getDate()
    formatedDate += ' '+date.toLocaleString('id-ID', {month: 'long'})
    formatedDate += ' '+date.getFullYear()
  } else {
    formatedDate = props.date
  }
  return formatedDate
})
</script>

<style scoped>

</style>