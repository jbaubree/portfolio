let timer: ReturnType<typeof setTimeout> | undefined
export const fadeDark = ref(true)
export const isDark = ref(false)

const toggle = () => {
  isDark.value = !isDark.value

  const el = window?.document.querySelector('html')
  if (!el)
    return

  el.setAttribute('class', isDark.value ? 'dark' : '')
}

const toggleFade = () => {
  fadeDark.value = false
  if (timer)
    clearTimeout(timer)

  timer = setTimeout(() => {
    fadeDark.value = true
  }, 350)
}

export const toggleDark = () => {
  toggleFade()
  setTimeout(() => {
    toggle()
  }, 300)
}
