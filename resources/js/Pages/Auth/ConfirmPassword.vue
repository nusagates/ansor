<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <div class="mb-4 text-sm text-gray-600">
          Ini adalah area terbatas. Harap konfirmasi kata sandi Anda sebelum melanjutkan.
        </div>

        <form @submit.prevent="submit">
          <v-text-field density="comfortable" label="Password" v-model="form.password" required autofocus autocomplete="current-password" type="password"
          :error-messages="form.errors.password"
          />


            <div class="flex justify-end mt-4">
              <v-btn color="teal" variant="flat" type="submit" :disabled="form.processing" :loading="form.processing">Konfirmasi</v-btn>
            </div>
        </form>
    </GuestLayout>
</template>
