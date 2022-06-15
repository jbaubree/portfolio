export const screenHeight = computed(() => window.outerHeight)

export const isTallScreen = computed(() => screenHeight.value > 768)
