<template>
  <Head title="Kirim Pesan Whatsapp Tanpa Menyimpan Nomor"/>
  <container>
    <template #content>
      <v-container fluid>
        <v-card>
          <v-toolbar density="compact" color="teal">
            <v-toolbar-title>Kirim Pesan Whatsapp</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>Kamu bisa kirim pesan Whatsapp tanpa perlu menyimpan nomornya. Coba saja gunakan form di bawah ini.</p>
            <v-sheet class="d-flex">
              <v-sheet width="80">
                <v-select density="compact" :items="data.code" v-model="field.code"/>
              </v-sheet>
              <v-text-field  type="number" density="compact" variant="outlined" placeholder="Nomor Tujuan" color="teal" v-model="field.phone"/>
            </v-sheet>
            <v-sheet height="300" border>
              <QuillEditor ref="message" :toolbar="['bold', 'italic', 'strike']" placeholder="Isi Pesan" theme="bubble" content-type="html" v-model:content="field.message" />
            </v-sheet>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn ref="sendBtn" @click="send" color="teal" prepend-icon="mdi-whatsapp" variant="flat">Kirim Pesan</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
      <toast ref="msg"/>
    </template>
  </container>
</template>

<script setup>

import {Head} from "@inertiajs/vue3";
import {reactive, ref} from "vue";
import Toast from "@/Components/Toast.vue";
import Container from "@/Components/Container.vue";

const msg = ref(null)
const message = ref('')
let data = reactive({
  code: ['+60', '+61', '+62']
})
let field = reactive({
  code: "+62",
  phone: null,
  message: ''
})

function send() {
  if (field.phone === null) {
    msg.value.show('Silahkan isi nomor telpon', 'red', 2000)
  } else if (field.message === null) {
    msg.value.show('Silahkan isi pesan', 'red', 2000)
  } else {
    let waUrl = 'https://api.whatsapp.com/send/?phone='
    let phone = field.code + field.phone

    let message = field.message
        .replace(/<p[^>]*>/g, '').replace(/<\/p>/g, "%0a")
        .replace(/<ol>|<\/ol>/g, '')
        .replace(/<li>|<\/li>/g, '')
        .replace(/<strong>|<\/strong>/g, '*')
        .replace(/<em>|<\/em>/g, '_')
        .replace(/<s>|<\/s>/g, '~')
        .replace(/%0a$/, '')
    waUrl += phone.replace(/\D/g, '');
    waUrl += '&text=' + message
    window.open(waUrl)
  }
}

function bold(){

}

</script>

<style scoped>

</style>
