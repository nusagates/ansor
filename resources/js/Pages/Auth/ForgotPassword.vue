<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import {Head} from '@inertiajs/vue3';
import {reactive, ref} from "vue";
import Toast from "@/Components/Toast.vue";

const loading = ref(false)
const status = ref(false)
const form = reactive({
  email: ''
})
let errors = reactive([])
const submit = () => {
  loading.value = true
  axios.post(route('password.email'), form)
      .then(res => {
        status.value = true
        loading.value = false
      })
      .catch(er => {
        console.log(er.response)
        errors = er.response.data.errors
        loading.value = false
      })
};
</script>

<template>
  <GuestLayout>
    <Head title="Forgot Password"/>

    <v-sheet v-if="!status">
      <div class="mb-4 text-sm text-gray-600">
        Lupa password Anda? Tidak masalah. Beritahu alamat email Anda dan kami akan mengirimkan link reset passwword.
      </div>
      <form @submit.prevent="submit">
        <v-text-field density="compact" label="Email" v-model="form.email" :error-messages="errors.email" type="email" required/>

        <v-btn :disabled="loading" :loading="loading" variant="flat" color="teal" type="submit">Email Link Reset Password</v-btn>
      </form>
    </v-sheet>
    <v-alert v-else title="Permintaan Diterima" text="Permintaan reset password telah diterima. Silahkan cek pesan masuk email Anda. Periksa folder spam jika tidak ada pesan masuk baru" color="success"/>
  </GuestLayout>
</template>
