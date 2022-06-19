import type { Ref } from 'vue'

export function useScreen() {
  const headerSize = ref<{ width: Ref<number>; height: Ref<number> }>()
  const screenHeight = $computed(() => window.outerHeight)
  const isTallScreen = $computed(() => screenHeight > 768)
  const pages = $computed(() => Array.from(document.querySelectorAll('#page') as NodeListOf<HTMLElement>))

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  onMounted(() => {
    headerSize.value = useElementSize(document.getElementById('header'))
  })

  return {
    ...$$({
      isTallScreen,
      pages,
    }),
    headerSize,
    scrollToTop,
  }
}
