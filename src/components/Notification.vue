<script setup lang="ts">
const bus = useEventBus<string>('contact-form')
const notifications = ref<{ message: string; popped: boolean; id: number }[]>([])
const id = ref(0)

const togglePopNotification = (id: number) => {
  notifications.value[notifications.value.findIndex(notification => notification.id === id)].popped = !notifications.value[notifications.value.findIndex(notification => notification.id === id)].popped
}

const listener = (event: string) => {
  const notificationId = id.value++
  notifications.value.push({
    message: event,
    popped: false,
    id: notificationId,
  })
  setTimeout(() => {
    togglePopNotification(notificationId)
  }, 100)
  setTimeout(() => {
    togglePopNotification(notificationId)
  }, 3000)
}

const unsubscribe = bus.on(listener)

const sortedNotifications = computed(() => notifications.value.sort(notification => notification.popped ? -1 : 1))
const poppedNotifications = computed(() => notifications.value.filter(notification => notification.popped))

onUnmounted(() => unsubscribe())
</script>

<template>
  <div
    class="transition-transform translate-0 fixed top-5 right-5 z-100"
    :class="{ 'translate-x-115': !poppedNotifications.length }"
  >
    <div
      v-for="notification, index in sortedNotifications"
      :key="index"
      class="transition-transform translate-0 bg-white rounded-4 p-3 shadow-lg shadow-primary/10 mb-3"
      :class="{ 'translate-x-115': !notification.popped }"
    >
      <div class="flex items-center">
        <div :class="notification.message === 'OK' ? 'i-fa-check-circle color-green' : 'i-fa-exclamation-triangle color-red'" />
        <div class="ml-2 mr-6">
          <span class="font-semibold text-dark-500">
            {{ notification.message === 'OK' ? 'Message envoyé!' : 'Erreur!' }}
          </span>
          <span class="block text-gray-500 max-w-350px">
            {{
              notification.message === 'OK'
                ? 'JB a bien reçu votre message, il y répondra au plus vite.'
                : 'Une erreur est survenur lors de l\'envoi du message. Veuillez réessayer plus tard.'
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
