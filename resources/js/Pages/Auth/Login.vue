<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import {Head} from '@inertiajs/vue3';
import {reactive, ref} from "vue";
import Toast from "@/Components/Toast.vue";
const msg = ref();
const success = ref(false)
const form = reactive({
  email: '',
  password: '',
  remember: false,
});
const processing = ref(false)
const submit = () => {
  processing.value = true
  axios.post('/login', form).then(res => {
    if (res.data.code === 200) {
      success.value = true
      msg.value.show(res.data.message, 'success', 3000)
      setTimeout(() => {
        location.href = '/dashboard'
      }, 3000)
    } else {
      msg.value.show(res.data.message, 'red')
    }
  }).finally(() => {
    processing.value = false
  })
};
</script>

<template>
  <GuestLayout>
    <Head title="Log in"/>

    <v-sheet v-if="!success">
      <v-text-field density="compact" type="email" label="Email" v-model="form.email"/>
      <v-text-field density="compact" type="password" label="Sandi" v-model="form.password"/>
      <v-checkbox label="Ingat saya" v-model="form.remember"/>
      <v-sheet class="d-flex justify-end">
        <v-btn variant="text" :href="route('password.request')">Lupa Sandi?</v-btn>
        <v-btn @click="submit" :loading="processing" :disabled="processing" class="ml-2" variant="flat" color="teal">Masuk</v-btn>
      </v-sheet>
    </v-sheet>
    <v-alert v-else
             title="Berhasil Masuk"
             text="Verifikasi akun berhasil. Sesaat lagi kamu akan diarahkan ke halaman dashboard."
             type="success"
             variant="tonal"
    ></v-alert>
    <toast ref="msg"/>
  </GuestLayout>
</template>