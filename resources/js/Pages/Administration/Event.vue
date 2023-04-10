<template>
  <Head title="Jadwal Kegiatan"/>
  <container>
    <template #content>
      <v-card flat>
        <template #title>
          <v-sheet class="d-flex justify-space-between">
            <h3>Jadwal Kegiatan</h3>
            <auth can="Read Event">
              <v-btn @click="createEvent" variant="text">
                <v-icon>mdi-plus</v-icon>
                Tambah
              </v-btn>
            </auth>
          </v-sheet>
        </template>
        <v-divider class="border-opacity-100"/>
        <v-card-text>
          <v-timeline density="compact" align="start" truncate-line="both">
            <v-timeline-item
                v-if="events!==null"
                v-for="(event, index) of events.data"
                :dot-color="index%2===0?'teal':'amber'"
                size="x-small">
              <v-sheet>
                <h2 v-text="event.name"/>
                <small>
                  <v-icon>mdi-account</v-icon>
                  {{ event.organizer }}<br/>
                  <v-icon>mdi-calendar</v-icon>
                  <date-format :date="event.activity_date"/> &nbsp;
                  <v-icon>mdi-clock-outline</v-icon>
                  <time-format :time="event.started_at"/>
                  <template v-if="event.finished_at!==null"> -
                    <time-format :time="event.finished_at"/>
                  </template>
                  <br/>
                  <v-icon>mdi-map-marker</v-icon>
                  {{ event.venue }}<br/>
                  <v-icon>mdi-bullhorn</v-icon>
                  {{ event.is_public ? 'untuk Umum' : 'Kalangan Terbatas' }}
                </small>
              </v-sheet>
              <auth can="Update Event">
                <v-btn @click="editEvent(event)" density="compact" variant="text" icon>
                  <v-icon>mdi-square-edit-outline</v-icon>
                </v-btn>
              </auth>
              <auth can="Delete Event">
                <v-btn @click="form.event=event;dialog.event.delete=true" density="compact" variant="text" icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </auth>
            </v-timeline-item>
          </v-timeline>
          <v-sheet class="d-flex justify-center">
            <pagination :data="events" :method="getEvents" total-visible="0"/>
          </v-sheet>
        </v-card-text>
      </v-card>
    </template>
  </container>

  <!-- Dialog Tambah/Edit Event-->
  <v-dialog v-model="dialog.event.create" fullscreen>
    <v-card>
      <v-toolbar density="compact" color="teal">
        <v-toolbar-title>Tambah Kegiatan</v-toolbar-title>
        <v-spacer/>
        <v-btn @click="dialog.event.create=false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-text-field density="compact" label="Nama Kegiatan" v-model="form.event.name"/>
        <v-text-field density="compact" label="Tanggal Kegiatan" v-model="form.event.activity_date" type="date"/>
        <v-text-field density="compact" label="Waktu Mulai" v-model="form.event.started_at" type="time"/>
        <v-text-field density="compact" label="Waktu Selesai" v-model="form.event.finished_at" type="time"/>
        <v-text-field density="compact" label="Tempat Kegiatan" v-model="form.event.venue"/>
        <v-text-field density="compact" label="Penyelenggara" v-model="form.event.organizer"/>
        <v-sheet max-height="300">
          <QuillEditor placeholder="Keterangan Kegiatan" theme="snow" content-type="html" v-model:content="form.event.notes"/>
        </v-sheet>
        <v-checkbox label="Kegiatan untuk Umum" v-model="form.event.is_public"/>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn v-if="form.event.id===null" @click="storeEvent" density="compact" color="teal" :loading="loading.event.store" :disabled="loading.event.store">Simpan</v-btn>
        <v-btn v-else @click="updateEvent" density="compact" color="teal" :loading="loading.event.update" :disabled="loading.event.update">Perbarui</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Dialog Hapus Event -->
  <v-dialog v-model="dialog.event.delete" width="300">
    <v-card>
      <v-toolbar density="compact" color="warning">
        <v-toolbar-title>Konfirmasi</v-toolbar-title>
        <v-spacer/>
        <v-btn @click="dialog.event.delete=false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        Apakah anda yakin ingin menghapus kegiatan <b v-text="form.event.name"/> ?
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn @click="deleteEvent" density="compact" color="warning" :loading="loading.event.delete" :disabled="loading.event.delete">Hapus</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- Pesan -->
  <toast ref="msg"/>
</template>

<script setup>
import {Head} from "@inertiajs/vue3";
import Container from "@/Components/Container.vue";
import {reactive, ref} from "vue";
import Toast from "@/Components/Toast.vue";
import DateFormat from "@/Components/DateFormat.vue";
import TimeFormat from "@/Components/TimeFormat.vue";
import Pagination from "@/Components/Pagination.vue";
import Auth from "@/Components/Auth.vue";

const msg = ref()
const events = ref(null)
const dialog = reactive({
  event: {
    create: false,
    delete: false,
  }
})
const loading = reactive({
  event: {
    get: false,
    store: false,
    update: false,
    delete: false,
  }
})
const form = reactive({
  event: {
    id: null,
    name: null,
    activity_date: null,
    started_at: null,
    finished_at: null,
    venue: null,
    organizer: null,
    is_public: true,
    notes: null,
  }
})
const createEvent = () => {
  form.event = {
    id: null,
    name: null,
    activity_date: null,
    started_at: null,
    finished_at: null,
    venue: null,
    organizer: null,
    is_public: true,
    notes: null,
  }
  dialog.event.create = true
}
const storeEvent = () => {
  loading.event.store = true
  axios.post('/event', form.event).then(res => {
    if (res.data.code === 200) {
      msg.value.show(res.data.message, 'success')
      dialog.event.create = false
      getEvents()
    } else {
      msg.value.show(res.data.message, 'red')
    }
  }).finally(() => {
    loading.event.store = false
  })
}
const updateEvent = () => {
  loading.event.update = true
  axios.patch(`/event/${form.event.id}`, form.event).then(res => {
    if (res.data.code === 200) {
      msg.value.show(res.data.message, 'success')
      dialog.event.create = false
      getEvents()
    } else {
      msg.value.show(res.data.message, 'red')
    }
  }).finally(() => {
    loading.event.update = false
  })
}
const getEvents = (page = 1) => {
  loading.event.get = true
  axios.get(`/event?page=${page}`).then(res => {
    loading.event.get = false
    events.value = res.data.data
  })
}
const editEvent = (event) => {
  form.event = event
  dialog.event.create = true
}
const deleteEvent = () => {
  loading.event.delete = true
  axios.delete(`/event/${form.event.id}`).then(res => {
    if (res.data.code === 200) {
      msg.value.show(res.data.message, 'success')
      dialog.event.delete = false
      getEvents()
    } else {
      msg.value.show(res.data.message, 'red')
    }
  }).finally(() => {
    loading.event.delete = false
  })
}
getEvents()
</script>

<style scoped>

</style>