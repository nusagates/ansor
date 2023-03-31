<template>
  <v-snackbar
      :color="snackbar.color"
      v-model="snackbar.visible"
      :timeout="snackbar.duration"
  >{{snackbar.message}}</v-snackbar>
</template>

<script setup lang="ts">
import {reactive} from "vue";

let snackbar = reactive({
  message: null,
  color: 'red',
  visible: false,
  duration: 1500
})

function show(message, color, duration) {
  snackbar.message = message
  snackbar.color = color
  snackbar.duration = duration
  snackbar.visible = true
}

defineExpose({show})
</script>
