<template>
  <v-card flat>
    <v-sheet class="d-flex justify-space-between px-3">
      <h3 class="mb-2">{{title}}</h3>
      <auth v-if="authCreate!==null" :can="authCreate">
        <v-btn @click="createData" variant="text">
          <v-icon>mdi-plus</v-icon>
          Tambah
        </v-btn>
      </auth>
    </v-sheet>
    <v-divider class="border-opacity-100"/>
    <v-card-text>
      <slot name="data"/>
      <v-sheet class="d-flex justify-center">
        <pagination :data="data" :method="getData" total-visible="0"/>
      </v-sheet>
    </v-card-text>
  </v-card>
  <!-- Dialog Tambah/Edit E-->
  <v-dialog v-model="createDialog" width="300" v-bind:fullscreen="fullscreenDialog">
    <v-card>
      <v-toolbar density="compact" color="teal">
        <v-toolbar-title>Tambah Kegiatan</v-toolbar-title>
        <v-spacer/>
        <v-btn @click="createDialog=false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <slot name="create-form"/>
      </v-card-text>
      <v-card-actions>
        <slot name="create-event"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import Pagination from "@/Components/Pagination.vue";
import Auth from "@/Components/Auth.vue";
import {ref} from "vue";

defineProps({
  authCreate: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  data: {
    default: null
  },
  getData: {
    type: Function
  },
  createData: {
    type: Function
  },
  storeDate: {
    type: Function
  },
  fullscreenDialog: {
    type: Boolean,
    default: false
  }
})
const createDialog = ref(false)
defineExpose({createDialog})
</script>

<style scoped>

</style>