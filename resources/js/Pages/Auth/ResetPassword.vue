<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import {Head, useForm} from '@inertiajs/vue3';
import {reactive, ref} from "vue";
import Toast from "@/Components/Toast.vue";
const msg = ref()
const success = ref(false)
const loading = ref(false)
const props = defineProps({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

let errors = reactive([])
const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
});

const submit = () => {
  loading.value = true
  axios.post(route('password.store'), form).then(res => {
    success.value = true
    loading.value = false
  }).catch(er => {
    errors = er.response.data.errors
    loading.value = false
    msg.value.show(er.response.data.message, 'red')
  })
};
</script>

<template>
  <GuestLayout>
    <Head title="Reset Password"/>
    <v-alert v-if="success" text="Reset sandi berhasil. Sesaat lagi Anda akan diarahkan ke halaman login." color="success"/>
    <form v-else @submit.prevent="submit">
      <v-text-field density="compact" label="Email" v-model="form.email" :error-messages="errors.email"/>
      <v-text-field density="compact" label="Sandi" v-model="form.password" max-errors="2" :error-messages="errors.password"/>
      <v-text-field density="compact" label="Konfirmasi Sandi" v-model="form.password_confirmation" :error-messages="errors.password_confirmation"/>
      <v-sheet class="d-flex justify-end">
        <v-btn variant="flat" type="submit" color="teal" :disabled="loading" :loading="loading">Ganti Password</v-btn>
      </v-sheet>
    </form>
    <toast ref="msg"/>
  </GuestLayout>
</template>
