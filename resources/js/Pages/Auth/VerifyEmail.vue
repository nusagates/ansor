<script setup>
import {computed} from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import {Head, Link, useForm} from '@inertiajs/vue3';

const props = defineProps({
  status: {
    type: String,
  },
});

const form = useForm({});

const submit = () => {
  form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
  <GuestLayout>
    <Head title="Email Verification"/>

    <div class="mb-4 text-sm text-gray-600">
      Terimakasih telah mengisi form pendataan. Bisakah emailmu diverifikasi terlebih dahulu dengan klik link yang baru saja kami kirim? Jika kamu tidak menerima email maka kami akan dengan senang mengirimkannya lagi.
    </div>

    <div class="mb-4 font-medium text-sm text-green-600" v-if="verificationLinkSent">
      Sebuah link verifikasi telah dikirim ke email kamu. Siahkan cek pesan masuk atau folder spam.
    </div>

    <form @submit.prevent="submit">
      <v-sheet class="d-flex justify-space-between">
        <v-btn density="comfortable" type="submit" variant="flat" color="teal">Kirim Ulang Link Verifikasi</v-btn>
        <Link
            :href="route('logout')"
            method="post"
            as="button"
            class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >Log Out
        </Link>
      </v-sheet>
    </form>
  </GuestLayout>
</template>
