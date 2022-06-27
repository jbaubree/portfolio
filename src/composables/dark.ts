let timer: ReturnType<typeof setTimeout> | undefined
export const fadeDark = ref(true)

const toggleFade = () => {
  fadeDark.value = false
  if (timer)
    clearTimeout(timer)

  timer = setTimeout(() => {
    fadeDark.value = true
  }, 350)
}

export const isDark = useDark()
export const toggle = useToggle(isDark)

export const toggleDark = () => {
  toggleFade()
  setTimeout(() => {
    toggle()
  }, 300)
}
