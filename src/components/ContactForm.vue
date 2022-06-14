<script setup lang="ts">
import { useAxios } from '@vueuse/integrations/useAxios'
const bus = useEventBus<string>('contact-form')

const form = ref({
  service_id: import.meta.env.VITE_EMAIL_SERVICE_ID,
  template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  user_id: import.meta.env.VITE_EMAIL_USER_ID,
  name: '',
  email: '',
  message: '',
})
const formData = ref(new FormData())

type Form = typeof form.value

const { data, isLoading, execute } = useAxios('https://api.emailjs.com/api/v1.0/email/send-form', {
  method: 'POST',
  data: formData.value,
}, { immediate: false })

watch(isLoading, (value) => {
  if (!value) {
    bus.emit(data.value)
    form.value.name = ''
    form.value.email = ''
    form.value.message = ''
  }
})

const sendEmail = () => {
  (Object.keys(form.value) as (keyof Form)[]).forEach((key: keyof Form) => {
    formData.value.append(key, form.value[key])
  })
  execute()
  formData.value = new FormData()
}
</script>

<template>
  <div class="flex flex-col gap-8 items-center">
    <input
      v-model="form.email"
      type="text"
      class="w-full bg-light-200 rounded-8 p-6 min-w-200px outline-none"
      md="min-w-300px"
      lg="min-w-500px"
      placeholder="Votre email"
    >
    <input
      v-model="form.name"
      type="text"
      class="w-full bg-light-200 rounded-8 p-6 min-w-200px outline-none"
      md="min-w-300px"
      lg="min-w-500px"
      placeholder="Votre nom"
    >
    <textarea
      v-model="form.message"
      rows="5"
      class="w-full bg-light-200 rounded-8 p-6 min-w-200px outline-none resize-none"
      md="min-w-300px"
      lg="min-w-500px"
      placeholder="Message"
    />
    <button
      class="flex items-center justify-center w-280px h-72px bg-primary rounded-8 px-25 py-6 text-white uppercase font-bold"
      :disabled="isLoading"
      @click="sendEmail()"
    >
      <div
        v-if="isLoading"
        style="border-top-color:transparent"
        class="w-10 h-10 border-4 border-white border-solid rounded-full animate-spin"
      />
      <span v-else>Envoyer</span>
    </button>
  </div>
</template>
