export const screenHeight = $computed(() => window.outerHeight)
export const isTallScreen = $computed(() => screenHeight > 768)
