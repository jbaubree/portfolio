export function useScreen() {
  const screenHeight = $computed(() => window.outerHeight)
  const isTallScreen = $computed(() => screenHeight > 768)

  return $$({
    isTallScreen,
  })
}
