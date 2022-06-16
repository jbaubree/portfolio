import type { RefType } from 'vue/macros'

type Without<T, K> = Pick<T, Exclude<keyof T, K>>

export type ExcludedRefType<T> = Without<T, typeof RefType>
