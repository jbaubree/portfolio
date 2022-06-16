export function useScreen() {
  const screenHeight = $computed(() => window.outerHeight)
  const isTallScreen = $computed(() => screenHeight > 768)
  const pages = $computed(() => Array.from(document.getElementsByClassName('page') as HTMLCollectionOf<HTMLElement>))

  return $$({
    isTallScreen,
    pages,
  })
}
