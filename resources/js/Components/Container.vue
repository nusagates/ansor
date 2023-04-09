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
        <template class="d-none d-sm-flex">
          <template v-for="item of menuItem">
            <v-btn v-if="item.show" :append-icon="item.children===null?'':'mdi-chevron-down'" :href="item.children===null?item.url:''" :value="item.value">
              {{ item.title }}
              <v-menu v-if="item.children!==null" activator="parent" location="bottom">
                <v-list density="compact" nav>
                  <v-list-item v-for="sub of item.children" :href="sub.url" :title="sub.title" :value="sub.value"/>
                </v-list>
              </v-menu>
            </v-btn>
          </template>
        </template>
        <v-spacer/>
        <template class="d-none d-sm-flex align-center">
          <v-sheet height="25" class="text-center px-1" rounded>
            <digital-clock type="date"/>&nbsp;
            <digital-clock type="time"/>
          </v-sheet>
          <template v-if="user===null">
            <v-btn href="/register" prepend-icon="mdi-account" value="register">Daftar</v-btn>
            <v-btn href="/login" prepend-icon="mdi-login" value="login">Masuk</v-btn>
          </template>
        </template>
        <v-avatar class="mx-2 d-none d-sm-flex" v-if="user!==null">
          <v-img :src="user.meta.images.profile"/>
          <v-menu activator="parent" location="bottom">
            <v-list density="compact" nav>
              <v-list-item href="/profile" value="profile">
                <v-icon>mdi-account</v-icon>
                Profil
              </v-list-item>
              <v-list-item @click="logoutDialog=true" class="text-red" value="logout">
                <v-icon>mdi-logout</v-icon>
                Keluar
              </v-list-item>
            </v-list>
          </v-menu>
        </v-avatar>
        <template class="d-flex d-sm-none mx-2">
        <v-sheet class="text-center px-1" rounded>
          <digital-clock type="date"/>&nbsp;
          <digital-clock type="time"/>
        </v-sheet>
        </template>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item v-if="user===null" prepend-avatar="/assets/images/default-profile.webp" title="GP. Ansor Argomulyo" subtitle="ansorargomulyo@gmail.com"/>
        <v-list-item href="/profile" v-else :prepend-avatar="user.meta.images.profile" :title="user.name" :subtitle="user.email"/>
        <v-divider class="border-opacity-100"/>
        <v-list density="compact" nav>
          <template v-for="item of menuItem">
            <template v-if="item.children===null">
              <v-list-item v-if="item.show" :href="item.url" :value="item.value">
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-list-item>
            </template>
            <template v-else>
              <v-list-group v-if="item.show" :value="item.value">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props">
                    <v-icon>{{ item.icon }}</v-icon>
                    {{ item.title }}
                  </v-list-item>
                </template>
                <v-list-item v-for="sub of item.children" :title="sub.title" :value="sub.value" :href="sub.url"/>
              </v-list-group>
            </template>
          </template>
          <template v-if="user===null">
            <v-list-item href="/register" value="register">
              <v-icon>mdi-account</v-icon>
              Daftar
            </v-list-item>
            <v-list-item href="/login" value="login">
              <v-icon>mdi-login</v-icon>
              Masuk
            </v-list-item>
          </template>
          <v-list-item v-else @click="logoutDialog=true" class="text-red" value="logout">
            <v-icon>mdi-logout</v-icon>
            Keluar
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
    <slot name="content"/>
  </v-app>
  <v-dialog width="300" v-model="logoutDialog">
    <v-card>
      <v-card-title>Konfirmasi</v-card-title>
      <v-card-text>
        Apakah kamu yakin ingin keluar dari aplikasi?
      </v-card-text>
      <v-card-actions>
        <v-btn @click="logoutDialog=false">Batal</v-btn>
        <v-spacer/>
        <v-btn color="warning" prepend-icon="mdi-logout" :disabled="processing.logout" :loading="processing.logout" variant="flat" @click="logout">Keluar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <toast ref="msg"/>
</template>

<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import Toast from "@/Components/Toast.vue";
import {usePage} from '@inertiajs/vue3';
import DigitalClock from "@/Components/DigitalClock.vue";

const user = usePage().props.auth.user;
const msg = ref()
const processing = reactive({
  logout: false
})

const logoutDialog = ref(false)
const drawer = ref(false)
const menuItem = reactive([
  {url: '/', title: 'Beranda', icon: 'mdi-home', value: 'home', children: null, show: true},
  {
    url: '#', title: 'Administrasi', icon: 'mdi-file-document-multiple', value: 'admin', children: [
      {url: '#', title: 'Data Anggota', icon: 'mdi-email', value: 'member'},
      {url: '#', title: 'Jadwal Kegiatan', icon: 'mdi-email', value: 'agenda'},
      {url: '#', title: 'Dokumentasi Kegiatan', icon: 'mdi-send', value: 'documentation'},
      {url: '#', title: 'Daftar Hadir', icon: 'mdi-send', value: 'attendance'},
      {url: '#', title: 'Buku Tamu', icon: 'mdi-send', value: 'guest-book'},
      {url: '#', title: 'Manajemen Surat', icon: 'mdi-send', value: 'letter'},
      {url: '#', title: 'Buku Inventaris', icon: 'mdi-send', value: 'inventory'},
      {url: '#', title: 'Akreditasi', icon: 'mdi-send', value: 'acreditation'},
      {url: '#', title: 'Audit Kinerja', icon: 'mdi-send', value: 'audit'},
    ],
    show: user !== null
  },
  {
    url: '#', title: 'Tool', icon: 'mdi-tools', value: 'tool', children: [
      {url: '/tool/undangan-elektronik', title: 'Undangan Elektronik', icon: 'mdi-email', value: 'invit'},
      {url: '/tool/whatsapp-sender', title: 'Kirim Whatsapp', icon: 'mdi-send', value: 'whatsapp'},
      {url: '/waktu-sholat', title: 'Jadwal Sholat', icon: 'mdi-send', value: 'prayer'},
    ],
    show: true
  },

])
const logout = () => {
  processing.logout = true
  axios.post(route('logout')).then(res => {
    processing.logout = false
    msg.value.show('Berhasil keluar dari aplikasi', 'success', 2000)
    setTimeout(() => {
      location.href = '/'
    }, 2000)
  })
}
</script>

<style scoped>

</style>