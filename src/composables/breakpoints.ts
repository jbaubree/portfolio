import type { ComputedRef, Ref } from 'vue'
import { breakpointsTailwind } from '@vueuse/core'

export function useTailwindBreakpoints(): {
  isXs: Ref<boolean>
  isSm: Ref<boolean>
  isMd: Ref<boolean>
  isLg: Ref<boolean>
  isXl: Ref<boolean>
  isSmAndLarger: Ref<boolean>
  isMdAndLarger: Ref<boolean>
  isLgAndLarger: Ref<boolean>
  breakpoint: ComputedRef<'xs' | 'sm' | 'md' | 'lg' | 'xl'>
} {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isXs = breakpoints.smaller('sm')
  const isSm = breakpoints.between('sm', 'md')
  const isMd = breakpoints.between('md', 'lg')
  const isLg = breakpoints.between('lg', 'xl')
  const isXl = breakpoints.greater('xl')

  const isSmAndLarger = breakpoints.greater('sm')
  const isMdAndLarger = breakpoints.greater('md')
  const isLgAndLarger = breakpoints.greater('lg')

  const breakpoint = computed(() => {
    if (isXs.value)
      return 'xs'
    if (isSm.value)
      return 'sm'
    if (isMd.value)
      return 'md'
    if (isLg.value)
      return 'lg'
    return 'xl'
  })

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isSmAndLarger,
    isMdAndLarger,
    isLgAndLarger,
    breakpoint,
  }
}
