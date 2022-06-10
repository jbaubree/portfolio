<script setup lang="ts">
const bus = useEventBus<string>('contact-form')
const [value, toggle] = useToggle()
const response = ref()

const listener = (event: string) => {
  response.value = event
  toggle()
  setTimeout(() => {
    toggle()
  }, 3000)
}
const unsubscribe = bus.on(listener)

onUnmounted(() => unsubscribe())
</script>

<template>
  <div
    class="opacity-100 fixed transition-all top-5 right-5 bg-white rounded-lg p-3 shadow-lg shadow-primary/30"
    :class="{ 'translate-x-115 opacity-0': !value }"
  >
    <div class="flex items-center">
      <div :class="response === 'OK' ? 'i-fa-check-circle color-green' : 'i-fa-exclamation-triangle color-red'" />
      <div class="ml-2 mr-6">
        <span class="font-semibold text-dark-500">
          {{ response === 'OK' ? 'Message envoyé!' : 'Erreur!' }}
        </span>
        <span class="block text-gray-500 max-w-350px">
          {{
            response === 'OK'
              ? 'JB a bien reçu votre message, il y répondra au plus vite.'
              : 'Une erreur est survenur lors de l\'envoi du message. Veuillez réessayer plus tard.'
          }}
        </span>
      </div>
    </div>
  </div>
</template>
