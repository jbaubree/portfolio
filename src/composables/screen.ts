export function useScreen() {
  const screenHeight = $computed(() => window.outerHeight)
  const isTallScreen = $computed(() => screenHeight > 768)
  const pages = $computed(() => Array.from(document.querySelectorAll('#page') as NodeListOf<HTMLElement>))

  return $$({
    isTallScreen,
    pages,
  })
}
