<template>
  <slot v-if="hasPermission"/>
</template>

<script setup>
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";

const props = defineProps(['can'])
const user = usePage().props.auth.user
const hasPermission = computed(() => {
  return user !== null && user.access.includes(props.can)
})
</script>

<style scoped>

</style>