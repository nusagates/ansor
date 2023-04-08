<template>
  <v-app>
    <v-sheet class="d-flex justify-center my-3">
      <v-img max-width="320" src="/assets/images/horizontal_logo.webp"/>
    </v-sheet>
    <v-sheet class="my-2">
      <v-toolbar density="compact" color="teal">
        <v-btn class="d-flex d-sm-none" @click="drawer=!drawer" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-items class="d-none d-sm-flex">
          <v-btn v-for="item of menuItem" :append-icon="item.children===null?'':'mdi-chevron-down'" :href="item.children===null?item.url:''" :value="item.value">
            {{ item.title }}
            <v-menu v-if="item.children!==null" activator="parent" location="bottom">
              <v-list density="compact" nav>
                <v-list-item v-for="sub of item.children" :href="sub.url" :title="sub.title" :value="sub.value"/>
              </v-list>
            </v-menu>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item prepend-avatar="/assets/images/default-profile.webp" title="GP. Ansor Argomulyo" subtitle="ansorargomulyo@gmail.com"/>
        <v-divider class="border-opacity-100"/>
        <v-list density="compact" nav>
          <template v-for="item of menuItem">
            <v-list-item v-if="item.children===null" :href="item.url" :title="item.title" :prepend-icon="item.icon" :value="item.value"/>
            <v-list-group :value="item.value" v-else>
              <template v-slot:activator="{ props }">
                <v-list-item :prepend-icon="item.icon" v-bind="props" :title="item.title"></v-list-item>
              </template>
              <v-list-item v-for="sub of item.children" :title="sub.title" :value="sub.value" :href="sub.url"/>
            </v-list-group>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
    <slot name="content"/>
  </v-app>
</template>

<script setup>
import {reactive, ref} from "vue";

const drawer = ref(false)
const menuItem = reactive([
  {url: '/', title: 'Beranda', icon: 'mdi-home', value: 'home', children: null},
  {
    url: '#', title: 'Tool', icon: 'mdi-tools', value: 'tool', children: [
      {url: '/tool/undangan-elektronik', title: 'Undangan Elektronik', icon: 'mdi-send', value: 'invit'},
      {url: '/tool/whatsapp-sender', title: 'Kirim Whatsapp', icon: 'mdi-send', value: 'whatsapp'},
      {url: '/waktu-sholat', title: 'Jadwal Sholat', icon: 'mdi-send', value: 'prayer'},
    ]
  },
  {url: '/register', title: 'Daftar', icon: 'mdi-account', value: 'register', children: null}

])
</script>

<style scoped>

</style>