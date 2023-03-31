<template>
  <Head title="Kirim Pesan Whatsapp Tanpa Menyimpan Nomor"/>
  <v-container fluid>
    <v-card>
      <v-toolbar density="compact" color="teal">
        <v-toolbar-title>Kirim Pesan Whatsapp</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <p>Kamu bisa kirim pesan Whatsapp tanpa perlu menyimpan nomornya. Coba saja gunakan form di bawah ini.</p>
        <v-sheet class="d-flex">
          <v-responsive width="80">
            <v-select prefix="+" density="compact" :items="data.code" v-model="field.code"/>
          </v-responsive>
          <v-responsive>
            <v-text-field density="compact" label="Nomor Tujuan" color="teal" v-model="field.phone" hint="gunakan format internasioal misal: 6282225005825 atau 608767867" clearable/>
          </v-responsive>
        </v-sheet>
        <v-textarea density="compact" label="Isi Pesan" color="teal" v-model="field.message" clearable/>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn ref="sendBtn" @click="send" color="teal" prepend-icon="mdi-whatsapp" variant="flat">Kirim Pesan</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import {Head} from "@inertiajs/vue3";
import {reactive, ref} from "vue";

const sendBtn = ref(null)
let data = reactive({
  code: [60, 61, 62]
})
let field = reactive({
  code: 62,
  phone: null,
  message: null
})

function send() {
  if (field.phone === null) {
    alert("silahkan isi nomor telpon")
  } else if (field.message === null) {
    alert('silahkan isi pesan')
  } else {
    let waUrl = 'https://api.whatsapp.com/send/?phone='
    let phone = field.code + field.phone
    console.log(phone)
    let message = field.message
    waUrl += phone.replace(/\D/g, '');
    waUrl += '&text=' + message
    window.open(waUrl)
  }
}
</script>

<style scoped>

</style>