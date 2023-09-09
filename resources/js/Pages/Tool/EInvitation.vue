<template>
    <Head title="Undangan Digital"/>
  <container>
    <template #content>
      <v-card>
        <v-toolbar density="compact" color="teal">
          <v-toolbar-title>Undangan Elektronik</v-toolbar-title>
          <v-spacer/>
          <v-toolbar-items>
            <v-btn @click="resetData" variant="flat" color="teal">Reset Data</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-alert color="warning" class="mb-3" density="compact" icon="mdi-access-point-off"
                   text="Sepertinya kamu sedang offline, ya" v-if="!isOnline"/>
          <v-text-field density="compact" label="Nama Kegiatan" v-model="data.agenda"/>
          <v-text-field density="compact" label="Tanggal Kegiatan" v-model="data.date" type="date"/>
          <v-text-field density="compact" label="Waktu Kegiatan" v-model="data.time" hint="contoh: Pukul 19:30 WIB"/>
          <v-text-field density="compact" label="Tempat Kegiatan" v-model="data.place"/>
          <v-text-field density="compact" label="Nama Organisasi" v-model="data.organization"
                        hint="contoh: PAC GP ANSOR ARGOMULYO"/>
          <v-divider/>
          <h4>Pembuat Surat</h4>
          <v-text-field density="compact" label="Nama" v-model="data.senderName"/>
          <v-text-field density="compact" label="Jabatan" v-model="data.senderTitle"/>
          <h4>Supervisi/Mengetahui</h4>
          <v-text-field density="compact" label="Nama" v-model="data.supervisorName"/>
          <v-text-field density="compact" label="Jabatan" v-model="data.supervisorTitle"/>
          <h4>Penerima Undangan/ Yth.</h4>
          <template v-for="(item, index) of data.recipients">
            <v-text-field @click:append="removeRecipient(index)" density="compact" label="Nama" v-model="item.value" :append-icon="index>0?'mdi-close':''"/>
          </template>
          <v-btn @click="addRecipient" variant="outlined" density="compact" prepend-icon="mdi-plus">Tambah Penerima</v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveData" variant="flat" color="teal">
            <v-icon>mdi-eye</v-icon> Preview
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-dialog v-model="dialog.preview" fullscreen>
        <v-card>
          <v-toolbar density="compact" title="Preview" color="teal">
            <v-spacer/>
            <v-toolbar-items>
              <v-btn @click="dialog.preview=false" icon variant="text">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-sheet class="mb-3" v-if="data.recipients.length<=3">
              Yth.<br/>
              <ol class="ml-9">
                <template v-for="rep of data.recipients">
                  <li style="list-style: decimal" v-text="rep.value"/>
                </template>
              </ol>
            </v-sheet>
            <v-sheet class="mb-3" v-else>
              Yth.<br/>
              <u>Daftar Terlampir</u>
            </v-sheet>
            <p><em>Assalamu alaikum Wr. Wb.</em></p>
            <p class="my-2 text-justify" v-text="data.opening"/>
            <p class="text-justify">
              Sehubungan dengan akan diadakannya <strong v-text="data.agenda"/> yang Insya Allah akan dilaksanakan
              pada:
            </p>
            <table>
              <tr>
                <td style="width: 100px;">Hari</td>
                <td>:</td>
                <td class="px-1">{{ new Date(data.date).toLocaleDateString('id-ID', {weekday: 'long'}) }}</td>
              </tr>
              <tr>
                <td>Tanggal</td>
                <td>:</td>
                <td class="px-1">{{
                    new Date(data.date).toLocaleDateString('id-ID', {
                      month: 'long',
                      day:   '2-digit',
                      year:  'numeric'
                    })
                  }}
                </td>
              </tr>
              <tr>
                <td>Waktu</td>
                <td>:</td>
                <td class="px-1" v-text="data.time"/>
              </tr>
              <tr>
                <td>Tempat</td>
                <td>:</td>
                <td class="px-1" v-text="data.place"/>
              </tr>
            </table>
            <p class="my-2 text-justify">kami mengharap kehadirannya pada acara tersebut.</p>
            <p class="text-justify" v-text="data.closing"/>
            <p class="mt-2"><em>Wallahul muafieq ila aqwamiettarieq</em><br/>
              <em>Wassalamualaikum Wr. Wb.</em>
            </p>
            <v-sheet>
              <v-sheet class="text-center my-2">
                <h2><strong>{{ data.organization.toUpperCase() }}</strong></h2>
              </v-sheet>
              <v-sheet class="d-flex justify-space-between">
                <v-sheet class="text-center">
                  <h3 v-text="data.supervisorTitle"/>
                  <h3 class="font-weight-bold" v-text="data.supervisorName"/>
                </v-sheet>
                <v-sheet class="text-center">
                  <h3 v-text="data.senderTitle"/>
                  <h3 class="font-weight-bold" v-text="data.senderName"/>
                </v-sheet>
              </v-sheet>
            </v-sheet>
            <v-divider class="mt-3" color="red" thickness="4"/>
            <v-sheet class="mt-15" v-if="data.recipients.length>3">
              <h3>Lampiran Penerima Surat:</h3>
              Yth.<br/>
              <ol class="ml-9">
                <template v-for="rep of data.recipients">
                  <li style="list-style: decimal" v-text="rep.value"/>
                </template>
              </ol>
            </v-sheet>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn @click="copyText" color="teal" variant="flat" prepend-icon="mdi-content-copy">Salin Teks</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </container>

</template>

<script setup>
import {Head} from "@inertiajs/vue3";
import {onMounted, reactive, readonly} from "vue";
import {useDateFormat, useLocalStorage, useNow, useOnline, usePageLeave} from "@vueuse/core";
import Container from "@/Components/Container.vue";

const isOnline = useOnline()
const now = useNow()
const date = useDateFormat(now, 'YYYY-MM-DD')
let dialog = reactive({
    preview: false
})
let data = useLocalStorage('invitation', {
    recipients:      [{value: null}],
    opening:         'Puji syukur kami panjatkan kehadirat Allah SWT yang senantiasa melimpahkan rahmat, inayah, dan taufiq-Nya kepada kita semua.',
    closing:         'Demikian undangan ini dibuat, atas perhatian dan kehadirannya diucapkan terimakasih.',
    date:            date,
    time:            '',
    place:           '',
    agenda:          '',
    senderName:      '',
    senderTitle:     '',
    supervisorName:  '',
    supervisorTitle: '',
    organization:    ''
})


function saveData() {
    dialog.preview = true
}

function resetData() {
    data.value = {
        recipients:      [{value: null}],
        opening:         'Puji syukur kami panjatkan kehadirat Allah SWT yang senantiasa melimpahkan rahmat, inayah, dan taufiq-Nya kepada kita semua.',
        closing:         'Demikian undangan ini dibuat, atas perhatian dan kehadirannya diucapkan terimakasih.',
        date:            date,
        time:            '',
        place:           '',
        agenda:          '',
        senderName:      '',
        senderTitle:     '',
        supervisorName:  '',
        supervisorTitle: '',
        organization:    ''
    }
}

const isLeft = usePageLeave()

function addRecipient() {
    data.value.recipients.push({value: null})
}
function removeRecipient(i) {
    data.value.recipients.splice(i,1)
}
function copyText() {

}

</script>

<style scoped>

</style>
