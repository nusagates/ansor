<template>
  <Head title="Data Anggota" v-if="showTitle"/>
  <v-card-title v-if="members!==null" v-for="(user,index) of members.data">
    {{user.name}}
  </v-card-title>
  <container v-if="showNav">
    <template #content>
      <!-- Konten Utama -->
      <inner-content title="Data Anggota" auth-create="Add Member">
        <template #data>

          <v-list density="compact">
            <v-list-item v-if="members!==null" v-for="(user, index) of members.data" :key="index">
              <template #prepend>
                <v-avatar>
                  <v-img :src="user.meta.images.profile"/>
                </v-avatar>
              </template>
              <template #title>
                {{ user.name }}
                <v-chip @click.stop="form.user=user;approvalDialog.show=true" density="compact" variant="flat" color="lime-lighten-4" v-if="user.status==='submitted'">Verifikasi</v-chip>
                <v-chip density="compact" variant="flat" color="yellow-lighten-4" v-if="user.status==='inactive'">Tidak Aktif</v-chip>
                <v-chip density="compact" variant="flat" v-if="user.status==='deceased'">Meninggal Dunia</v-chip>
                <v-chip density="compact" variant="flat" color="amber-lighten-4" v-if="user.status==='suspended'">Tidak Aktif</v-chip>
                <v-chip density="compact" variant="flat" color="red" v-if="user.status==='dismissed'">Dikeluarkan</v-chip>
                <v-chip density="compact" variant="flat" color="red-lighten-4" v-if="user.status==='transferred'">Pindah Tugas</v-chip>
                <template v-if="user.status==='active'">
                  <v-icon color="blue" size="20">mdi-check-circle</v-icon>
                </template>
              </template>
              <template #subtitle>
                Anggota {{ user.is_banser ? 'Banser' : 'Ansor' }}
              </template>
              <template #default>
                <div class="item my-1">
                  <v-icon>mdi-map-marker</v-icon>
                  {{ user.management.name }}
                </div>
                <div class="item my-1">
                  <v-icon>mdi-whatsapp</v-icon>
                  {{ user.phone }}
                </div>
                <div class="item my-1">

                </div>
              </template>
            </v-list-item>
          </v-list>
        </template>
      </inner-content>
    </template>
  </container>
  <inner-dialog :toolbar="false" title="Konfirmasi" color="warning" ref="approvalDialog" width="300">
    <template #content>
      <v-radio-group></v-radio-group>
    </template>
    <template #action>
      <v-spacer/>
      <v-btn variant="flat" color="teal">Ubah Status</v-btn>
    </template>
  </inner-dialog>
</template>

<script setup>
import {Head} from "@inertiajs/vue3";
import Container from "@/Components/Container.vue";
import {onMounted, reactive, ref} from "vue";
import InnerContent from "@/Components/InnerContent.vue";
import InnerDialog from "@/Components/InnerDialog.vue";

defineProps({
  showNav: {
    default: true,
    type: Boolean
  },
  showTitle: {
    default: true,
    type: Boolean
  }
})
const loading = reactive({
  member: {
    get: false,
    store: false,
    update: false,
    delete: false,
    approval: false
  }
})
const approvalDialog = ref()
let members = reactive(null)
let form = reactive({
  user: {
    id: null,
    name: null,
    status: null
  }
})
const getMembers = (page = 1) => {
  loading.member.get = true
  axios.get('/member').then(res => {
    if (res.data.code === 200) {
      members = res.data.data
    }
  })
}
onMounted(()=>{
  getMembers()
})
</script>

<style scoped>

</style>