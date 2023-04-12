<template>
  <v-dialog v-model="show" :fullscreen="width==='fullscreen'" :width="width==='fullscreen'?undefined:width">
    <v-card>
      <v-toolbar v-if="toolbar" density="compact" :color="color">
        <v-toolbar-title>Judul</v-toolbar-title>
        <v-spacer/>
        <v-btn @click="show=false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-title v-text="title" v-else/>
      <v-card-text>
        <slot name="content"/>
      </v-card-text>
      <v-card-actions>
        <slot name="action"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {ref} from "vue";

defineProps({
  color: {
    type: String,
    default: 'teal'
  },
  width: {
    Type: String,
    default: 300
  },
  title: {
    type: String,
    default: ''
  },
  toolbar: {
    type: Boolean,
    default: true
  }
})
const show = ref(false)
defineExpose({show})
</script>