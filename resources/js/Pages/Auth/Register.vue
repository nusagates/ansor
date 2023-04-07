<template>
  <Head title="Pendaftaran Keanggotaan"/>
  <v-sheet class="d-flex justify-center mx-2">
    <v-sheet v-if="form.id===null" width="500">
      <v-sheet class="d-flex justify-center my-5">
        <v-img max-width="150" src="/assets/images/logo.png"/>
      </v-sheet>
      <v-card>
        <v-toolbar density="compact" color="teal">
          <v-toolbar-title>{{ title[window - 1] }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-window :touch="false" v-model="window">
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
              <v-sheet class="text-center">
                <v-sheet>
                  <v-sheet class="d-flex justify-center">
                    <vue-cropper :aspect-ratio="1" v-if="isCrop" ref="profileImage" :src="form.data.images.profile"/>
                    <img v-else :src="form.data.images.profile"/>
                  </v-sheet>
                </v-sheet>
                <v-sheet class="d-flex justify-center my-2">
                  <v-btn @click="file.click()" density="compact" prepend-icon="mdi-image">Ganti Profil</v-btn>
                  <v-btn density="compact" @click="cropProfileImage" v-if="isCrop" prepend-icon="mdi-crop" class="ml-2">Crop</v-btn>
                </v-sheet>
                <input v-show="false"
                       type="file"
                       ref="file"
                       @change="selectProfile($event)"
                       accept="image/*"
                />
              </v-sheet>
              <v-select label="Ranting Asal" density="compact" :items="managements" item-title="name" item-value="id" v-model="form.management_id"/>
              <v-text-field label="NIK" density="compact" v-model="form.nik"/>
              <v-sheet class="text-center">
                <v-sheet>
                  <v-sheet class="d-flex justify-center">
                    <vue-cropper v-if="isKtpCrop" ref="ktpImage" :src="form.data.images.ktp"/>
                    <img v-if="!(isKtpCrop||form.data.images.ktp=='')" :src="form.data.images.ktp" alt="ktp"/>
                  </v-sheet>
                </v-sheet>
                <v-sheet class="d-flex justify-center my-2">
                  <v-btn @click="fileKtp.click()" density="compact" prepend-icon="mdi-image">Pilih KTP</v-btn>
                  <v-btn density="compact" @click="cropKtpImage" v-if="isKtpCrop" prepend-icon="mdi-crop" class="ml-2">Crop</v-btn>
                </v-sheet>
                <input v-show="false"
                       type="file"
                       ref="fileKtp"
                       @change="selectKtp($event)"
                       accept="image/*"
                />
              </v-sheet>
              <v-text-field label="Nama Lengkap" density="compact" v-model="form.name"/>
              <v-text-field label="Nomor Telpon" density="compact" v-model="form.phone" type="tel"/>
              <v-text-field label="Email" density="compact" v-model="form.email" type="email"/>
              <v-text-field hint="Buatlah sandi yang kuat dan aman" label="Sandi" density="compact" v-model="form.password" type="password"/>
              <small class="text-red v-messages" role="alert" v-if="form.password!==''&&form.password.length<8">Panjang sandi minimal 8 karakter</small>
              <v-text-field class="mt-4" hide-details label="Konfirmasi Sandi" density="compact" v-model="form.password_confirmation" type="password"/>
              <small class="text-red" v-if="form.password!==form.password_confirmation">Sandi yang Anda masukkan tidak sama</small>
              <v-checkbox label="Centang jika sudah ikut Banser" v-model="form.is_banser"/>
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

            </v-window-item>
            <v-window-item :value="4">
              <!-- Pendidikan Agama -->
              <v-sheet>
                <template v-for="(rel, index) of form.data.religious_education">
                  <v-card border class="mb-2">
                    <v-toolbar density="compact">
                      <v-toolbar-title>Agama {{ index + 1 }}</v-toolbar-title>
                      <v-spacer/>
                      <v-btn v-if="index>0" @click="form.data.religious_education.splice(index,1)" color="red" icon>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-text>
                      <v-select label="Jenjang Pendidikan" density="compact" v-model="rel.level" :items="religiouslEducationLevel"/>
                      <v-text-field label="Nama Madrasah/Pesantren" density="compact" v-model="rel.name"/>
                      <v-text-field label="Tahun Lulus" density="compact" v-model="rel.year" type="number"/>
                      <v-sheet v-if="index==form.data.religious_education.length-1" class="d-flex justify-center">
                        <v-btn density="compact" variant="text" @click="form.data.religious_education.push({level: '', name: '', year: ''})" prepend-icon="mdi-plus-box">Pendidikan Agama</v-btn>
                      </v-sheet>
                    </v-card-text>
                  </v-card>
                </template>
              </v-sheet>
              <!-- Pendidikan Formal -->
              <v-sheet>
                <template v-for="(rel, index) of form.data.formal_education">
                  <v-card border class="mb-2">
                    <v-toolbar density="compact">
                      <v-toolbar-title>Formal {{ index + 1 }}</v-toolbar-title>
                      <v-spacer/>
                      <v-btn v-if="index>0" @click="form.data.formal_education.splice(index,1)" color="red" icon>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-text>
                      <v-select label="Jenjang Pendidikan" density="compact" v-model="rel.level" :items="formalEducationLevel"/>
                      <v-text-field label="Nama Sekolah/Perguruan Tinggi" density="compact" v-model="rel.name"/>
                      <v-text-field label="Tahun Lulus" density="compact" v-model="rel.year" type="number"/>
                      <v-sheet v-if="index==form.data.formal_education.length-1" class="d-flex justify-center">
                        <v-btn density="compact" variant="text" @click="form.data.formal_education.push({level: '', name: '', year: ''})" prepend-icon="mdi-plus-box">Pendidikan Formal</v-btn>
                      </v-sheet>
                    </v-card-text>
                  </v-card>
                </template>
              </v-sheet>
              <!-- Kaderisasi -->
              <v-sheet>
                <template v-for="(rel, index) of form.data.cadre_education">
                  <v-card border class="mb-2">
                    <v-toolbar density="compact">
                      <v-toolbar-title>Kaderisasi {{ index + 1 }}</v-toolbar-title>
                      <v-spacer/>
                      <v-btn v-if="index>0" @click="removeCadreLevel(index)" color="red" icon>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-text>
                      <v-select label="Jenjang Kaderisasi" density="compact" v-model="rel.level" :items="cadreEducationLevel"/>
                      <v-text-field label="Tahun Kaderisasi" density="compact" v-model="rel.year" type="number"/>
                      <v-sheet class="text-center">
                        <v-sheet>
                          <v-sheet class="d-flex justify-center">
                            <vue-cropper v-if="isCertCrop===index" ref="certImage" :src="rel.file"/>
                            <img v-if="!(isCertCrop==index||rel.file=='')" :src="rel.file" alt="ktp"/>
                          </v-sheet>
                        </v-sheet>
                        <v-sheet class="d-flex justify-center my-2">
                          <v-btn @click="pickCert(index)" density="compact" prepend-icon="mdi-image">Upload Sertifikat</v-btn>
                          <v-btn density="compact" @click="cropCertImage(index)" v-if="isCertCrop===index" prepend-icon="mdi-crop" class="ml-2">Crop</v-btn>
                        </v-sheet>
                        <input v-show="false"
                               type="file"
                               ref="fileCert"
                               @change="selectCert($event, index)"
                               accept="image/*"
                        />
                      </v-sheet>
                      <v-sheet v-if="index===form.data.cadre_education.length-1">
                        <v-divider thickness="3" color="blue" class="border-opacity-100"/>
                        <v-sheet class="d-flex justify-center">
                          <v-btn class="my-2" density="compact" variant="text" @click="addCadreLevel" prepend-icon="mdi-plus-box">Jenjang Kaderisasi</v-btn>
                        </v-sheet>
                      </v-sheet>
                    </v-card-text>

                  </v-card>
                </template>
              </v-sheet>

            </v-window-item>
          </v-window>
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="window>1" :disabled="window<=1" @click="window--">Kembali</v-btn>
          <v-spacer/>
          <v-btn v-if="window<4" :disabled="!form.is_agree" @click="window++" color="teal" variant="flat">Lanjut</v-btn>
          <v-btn :disabled="loading.user.store" :loading="loading.user.store" v-if="window===4" @click="storeUser" color="teal" variant="flat">Simpan</v-btn>
        </v-card-actions>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="red" variant="text" @click="resetDialog=true">
            <v-icon>mdi-delete</v-icon>
            Reset Data
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-sheet>
    <v-sheet class="ma-5" v-else>
      <v-sheet class="d-flex justify-center my-5">
        <v-img max-width="150" src="/assets/images/logo.png"/>
      </v-sheet>
      <v-card>
        <v-toolbar density="compact" color="teal" title="Pendaftaran Berhasil"/>
        <v-card-text>
          Terimakasih telah mengisi form pendaftaran keanggotaan Ansor. Data Anda segera diproses oleh tim kaderisasi.
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-sheet>
  <v-dialog v-model="resetDialog" width="350">
    <v-card>
      <v-toolbar density="compact" color="warning">
        <v-toolbar-title>Konfirmasi</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <v-btn icon variant="text" @click="resetDialog=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        Apakah Anda yakin ingin menghapus semua data yang telah diinput?
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn variant="flat" color="warning" @click="resetData">Reset</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <toast ref="msg"/>
</template>
<script setup>
import {Head} from "@inertiajs/vue3";
import {computed, onMounted, onUnmounted, reactive, ref} from "vue";
import {useLocalStorage} from "@vueuse/core";
import Toast from "@/Components/Toast.vue";

import "cropperjs/dist/cropper.min.css"
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

const resetDialog = ref(false)
let managements = ref([])
const msg = ref(null)
const profileImage = ref();
const ktpImage = ref();
const certImage = ref([]);
const file = ref();
const fileKtp = ref();
const fileCert = ref([]);
const isCrop = ref(false)
const isKtpCrop = ref(false)
const isCertCrop = ref(null)
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
    images: {
      profile: '/assets/images/default-profile.webp',
      ktp: ''
    },
    pob: '',
    dob: '',
    job: '',
    average_income: '',
    marital_status: 'Single',
    number_of_children: '',
    last_fomal_education: 'SD',
    last_religious_education: 'TPQ',
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
    cadre_education: [{level: '', file: '', year: ''}],
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
const religiouslEducationLevel = ref(["Tahfidzul Qur'an", "Sorogan", "TPQ", "Ula", "Wustha", "Ulya", "Ma'had Aly", "Tidak Sekolah"])
const cadreEducationLevel = ref(["PKD", "Diklatsar", "Dirosah Ula", "PKL", "Susbalan", "Dirosah Wustha", "PKN", "Susbanpim", "Dirosah Ulya", "Belum Pernah"])
const maritalStatus = ref(["Single", "Menikah", "Duda"])
const loading = reactive({
  user: {
    store: false
  }
})

function selectProfile(event) {
  if (!(event && event.target)) return
  const {files} = event.target;
  if (files && files[0]) {
    const reader = new FileReader()
    reader.onload = event => {
      isCrop.value = true
      form.value.data.images.profile = event.target.result
    }
    reader.readAsDataURL(files[0])
  }

}

function selectKtp(event) {
  if (!(event && event.target)) return
  const {files} = event.target;
  if (files && files[0]) {
    const reader = new FileReader()
    reader.onload = event => {
      isKtpCrop.value = true
      form.value.data.images.ktp = event.target.result
    }
    reader.readAsDataURL(files[0])
  }

}

function pickCert(index) {
  fileCert.value[index].click()
}

function selectCert(event, index) {
  console.log(index)
  if (!(event && event.target)) return
  const {files} = event.target;
  if (files && files[0]) {
    const reader = new FileReader()
    reader.onload = event => {
      isCertCrop.value = index
      form.value.data.cadre_education[index].file = event.target.result
    }
    reader.readAsDataURL(files[0])
  }

}

function storeUser() {
  if (form.value.id === null) {
    loading.user.store = true
    axios.post('/user', form.value).then(res => {
      if (res.data.code === 200) {
        msg.value.show(res.data.message, 'success')
        form.value.id = res.data.data.id
      } else {
        msg.value.show(res.data.message, 'red')
      }
    }).finally(() => {
      loading.user.store = false
    })
  } else {
    msg.value.show("Akun sudah terdaftar. Silahkan login")
  }
}

function cropProfileImage() {
  form.value.data.images.profile = profileImage.value.getCroppedCanvas().toDataURL()
  isCrop.value = false
}

function cropKtpImage() {
  form.value.data.images.ktp = ktpImage.value.getCroppedCanvas().toDataURL()
  isKtpCrop.value = false
}

function cropCertImage(index) {

  form.value.data.cadre_education[index].file = certImage.value[0].getCroppedCanvas().toDataURL()
  isCertCrop.value = null
}

function addCadreLevel() {
  fileCert.value = []
  certImage.value = []
  form.value.data.cadre_education.push({level: '', file: '', year: ''})
}

function removeCadreLevel(index) {
  form.value.data.cadre_education.splice(index, 1)
  //certImage.value.splice(index, 1)
  //fileCert.value.splice(index, 1)
  delete certImage.value[index]
  delete fileCert.value[index]
}

function resetData() {
  form.value = {
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
      images: {
        profile: '/assets/images/default-profile.webp',
        ktp: ''
      },
      pob: '',
      dob: '',
      job: '',
      average_income: '',
      marital_status: 'Single',
      number_of_children: '',
      last_fomal_education: 'SD',
      last_religious_education: 'TPQ',
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
      cadre_education: [{level: '', file: '', year: ''}],
    }
  }
  window.value = 1
  resetDialog.value = false
}
</script>
<style>
ol {
  list-style-type: decimal;
}
</style>