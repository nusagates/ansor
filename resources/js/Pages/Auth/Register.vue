<template>
  <Head title="Pendaftaran Keanggotaan"/>
  <v-sheet class="d-flex justify-center mx-2">
    <v-sheet width="500">
      <v-sheet class="d-flex justify-center my-5">
        <v-img max-width="150" src="/assets/images/logo.png"/>
      </v-sheet>
      <v-card>
        <v-toolbar density="compact" color="teal">
          <v-toolbar-title>{{ title[window - 1] }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-window v-model="window">
            <v-window-item :value="1">
              <h2 style="font-size: 16px" class="text-center font-weight-bold mb-3 uppercase">Baiat Anggota Gerakan Pemuda Ansor</h2>
              <p class="text-justify">Demi Allah, Sebagai Anggota Gerakan Pemuda Ansor, Saya berbai’at :</p>
              <ol class="ml-5 text-justify">
                <li>Setia Memelihara dan Membela Ajaran Islam menurut paham Ahlussunnah Wal Jamaah Annahdliyyah.</li>
                <li>Setia Mempertahankan dan Membela Pancasila, Negara Kesatuan Republik Indonesia dan Undang-Undang Dasar Negara Republik Indonesia 1945.</li>
                <li>Siap Menjunjung Martabat Ulama dan Organisasi</li>
                <li>Sanggup Mentaati dan Melaksanakan Peraturan Dasar GP Ansor, Peraturan Rumah Tangga GP Ansor, Peraturan Organisasi GP Ansor dan Keputusan-Keputusan Organisasi</li>
                <li>Sanggup mendukung dan berpartisipasi aktif dalam pelaksanaan program-program demi mewujudkan tujuan organisasi.</li>
              </ol>
              <v-checkbox label="Saya menyatakan siap berbaiat" v-model="form.is_agree"/>
            </v-window-item>
            <v-window-item :value="2">
              <v-select label="Ranting Asal" density="compact" :items="managements" item-title="name" item-value="id" v-model="form.management_id"/>
              <v-text-field label="NIK" density="compact" v-model="form.nik"/>
              <v-text-field label="Nama Lengkap" density="compact" v-model="form.name"/>
              <v-text-field label="Nomor Telpon" density="compact" v-model="form.phone" type="tel"/>
              <v-text-field label="Email" density="compact" v-model="form.email" type="email"/>
              <v-text-field hide-details label="Sandi" density="compact" v-model="form.password" type="password"/>
              <smal class="text-red" v-if="form.password!==''&&form.password.length<8">Panjang sandi minimal 8 karakter</smal>
              <v-text-field class="mt-4" hide-details label="Konfirmasi Sandi" density="compact" v-model="form.password_confirmation" type="password"/>
              <smal class="text-red" v-if="form.password!==form.password_confirmation">Sandi yang Anda masukkan tidak sama</smal>
            </v-window-item>
            <v-window-item :value="3">
              <v-text-field label="Nomor Anggota (Jika Sudah Punya)" density="compact" v-model="form.member_number"/>
              <v-text-field label="Tempat Lahir" density="compact" v-model="form.data.pob"/>
              <v-text-field label="Tanggal Lahir" density="compact" v-model="form.data.dob" type="date"/>
              <v-text-field label="Pekerjaan/Profesi" density="compact" v-model="form.data.job"/>
              <v-text-field label="Pendapatan Rata-Rata/Bulan" density="compact" v-model="form.data.average_income"/>
              <v-select label="Status Pernikahan" density="compact" v-model="form.data.marital_status" :items="maritalStatus"/>
              <v-text-field v-if="form.data.marital_status!=='Single'" label="Jumlah Anak" density="compact" v-model="form.data.number_of_children" type="number"/>
              <v-select label="Pendidikan Agama Terakhir" density="compact" v-model="form.data.last_religious_education" :items="religiouslEducationLevel"/>
              <v-select label="Pendidikan Formal Terakhir" density="compact" v-model="form.data.last_fomal_education" :items="formalEducationLevel"/>
              <v-select label="Kaderisasi Terakhir" density="compact" v-model="form.data.last_cadre_education" :items="cadreEducationLevel"/>
              <v-text-field label="Kelurahan" density="compact" v-model="form.data.address.kelurahan"/>
              <v-sheet class="d-flex justify-space-between">
                <v-text-field label="RT" density="compact" v-model="form.data.address.rt"/>
                <v-text-field class="ml-2" label="RW" density="compact" v-model="form.data.address.rw"/>
              </v-sheet>
              <v-text-field label="kodepos" density="compact" v-model="form.data.address.kodepos"/>
              <v-textarea label="Alamat Jalan (jika ada)" density="compact" v-model="form.data.address.jalan"/>
              <v-checkbox label="Centang jika sudah ikut Banser" v-model="form.is_banser"/>
            </v-window-item>
            <v-window-item :value="4">
              <!-- Pendidikan Agama -->
              <v-sheet>
                <template v-for="(rel, index) of form.data.religious_education">
                  <v-card>
                    <v-toolbar density="compact">
                      <v-toolbar-title>Diniyah {{ index + 1 }}</v-toolbar-title>
                      <v-spacer/>
                      <v-btn v-if="index>0" @click="form.data.religious_education.splice(index,1)" color="red" icon>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-text>
                      <v-select label="Jenjang Pendidikan" density="compact" v-model="rel.level" :items="religiouslEducationLevel"/>
                      <v-text-field label="Nama Madrasah/Pesantren" density="compact" v-model="rel.name"/>
                      <v-text-field label="Tahun Lulus" density="compact" v-model="rel.year" type="number"/>
                    </v-card-text>
                  </v-card>
                </template>
                <v-btn class="my-2" density="compact" variant="outlined" @click="form.data.religious_education.push({level: '', name: '', year: ''})">Tambah Pendidikan</v-btn>
              </v-sheet>
              <!-- Pendidikan Formal -->
              <v-sheet>
                <template v-for="(rel, index) of form.data.formal_education">
                  <v-card>
                    <v-toolbar density="compact">
                      <v-toolbar-title>Formal {{ index + 1 }}</v-toolbar-title>
                      <v-spacer/>
                      <v-btn v-if="index>0" @click="form.data.formal_education.splice(index,1)" color="red" icon>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-text>
                      <v-select label="Pendidikan Agama Terakhir" density="compact" v-model="rel.level" :items="formalEducationLevel"/>
                      <v-text-field label="Nama Sekolah/Perguruan Tinggi" density="compact" v-model="rel.name"/>
                      <v-text-field label="Tahun Lulus" density="compact" v-model="rel.year" type="number"/>
                    </v-card-text>
                  </v-card>
                </template>
                <v-btn class="my-2" density="compact" variant="outlined" @click="form.data.formal_education.push({level: '', name: '', year: ''})">Tambah Pendidikan</v-btn>
              </v-sheet>
              <!-- Kaderisasi -->
              <v-sheet>
                <template v-for="(rel, index) of form.data.formal_education">
                  <v-card>
                    <v-toolbar density="compact">
                      <v-toolbar-title>Kaderisasi {{ index + 1 }}</v-toolbar-title>
                      <v-spacer/>
                      <v-btn v-if="index>0" @click="form.data.cadre_education.splice(index,1)" color="red" icon>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-text>
                      <v-select label="Jenjang Kaderisasi" density="compact" v-model="rel.level" :items="cadreEducationLevel"/>
                      <v-text-field label="Tempat Kaderisasi" density="compact" v-model="rel.name"/>
                      <v-text-field label="Tahun Kaderisasi" density="compact" v-model="rel.year" type="number"/>
                    </v-card-text>
                  </v-card>
                </template>
                <v-btn class="my-2" density="compact" variant="outlined" @click="form.data.cadre_education.push({level: '', name: '', year: ''})">Tambah Kaderisasi</v-btn>
              </v-sheet>

            </v-window-item>
          </v-window>
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="window>1" :disabled="window<=1" @click="window--">Sebelumnya</v-btn>
          <v-spacer/>
          <v-btn v-if="window===1" :disabled="!form.is_agree" @click="window++" color="teal" variant="flat">Selanjutnya</v-btn>
          <v-btn v-if="window===2" :disabled="!isValid||loading.user.store" :loading="loading.user.store" @click="storeUser" color="teal" variant="flat">Selanjutnya</v-btn>
          <v-btn v-if="window>2" @click="storeUser" color="teal" variant="flat">Simpan</v-btn>
        </v-card-actions>
      </v-card>
    </v-sheet>
  </v-sheet>
  <toast ref="msg"/>
</template>
<script setup>
import {Head} from "@inertiajs/vue3";
import {computed, onMounted, reactive, ref} from "vue";
import axios from "axios";
import {useLocalStorage} from "@vueuse/core";
import Toast from "@/Components/Toast.vue";

let managements = ref([])
const msg = ref(null)
const form = useLocalStorage('userData', {
  id: null,
  is_agree: false,
  is_banser: false,
  management_id: '',
  member_number: '',
  name: '',
  phone: '',
  email: '',
  password: '',
  password_confirmation: '',
  nik: '',
  data: {
    pob: '',
    dob: '',
    job: '',
    average_income: '',
    marital_status: 'Single',
    number_of_children: '',
    last_fomal_education: 'TPQ',
    last_religious_education: 'SD',
    last_cadre_education: 'Belum Pernah',
    address: {
      provinsi: 'Jawa Tengah',
      kota: 'Salatiga',
      kecamatan: 'Argomulyo',
      kelurahan: '',
      rt: '',
      rw: '',
      kodepos: '',
      jalan: ''
    },
    formal_education: [{level: '', name: '', year: ''}],
    religious_education: [{level: '', name: '', year: ''}],
    cadre_education: [{level: '', name: '', year: ''}],
  }
})
onMounted(() => {
  axios('/management?exclude=1').then(res => {
    managements.value = res.data
  })
})
const isValid = computed(() => {
  return !(form.management_id == '' || form.name == '' || form.phone == '' || form.email == '' || form.password == '' || form.password_confirmation == '') && (form.password === form.password_confirmation)
})
const window = ref(1)
const title = ref(["Baiat Anggota", "Pembuatan Akun", "Biodata Anggota", "Pendidikan"])
const formalEducationLevel = ref(["SD", 'SLTP', "SLTA", "PT", "Tidak Sekolah"])
const religiouslEducationLevel = ref(["TPQ", "Ula", "Wustha", "Ulya", "Ma'had Aly", "Tidak Sekolah"])
const cadreEducationLevel = ref(["PKD", "Diklatsar", "PKL", "Susbalan", "PKN", "Susbanpim", "Belum Pernah"])
const maritalStatus = ref(["Single", "Menikah", "Duda"])
const loading = reactive({
  user: {
    store: false
  }
})

function storeUser() {
  loading.user.store = true
  axios.post('/user', form.value).then(res => {
    if (res.data.code === 200) {
      msg.value.show(res.data.message)
      form.value.id = res.data.data.id
    } else {
      msg.value.show(res.data.message, 'red')
    }
  }).finally(() => {
    loading.user.store = false
  })
}
</script>
<style>
ol {
  list-style-type: decimal;
}
</style>