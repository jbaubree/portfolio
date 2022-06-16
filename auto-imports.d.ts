// Generated by 'unplugin-auto-import'
export {}
declare global {
  const $$: typeof import('vue/macros')['$$']
  const $: typeof import('vue/macros')['$']
  const $computed: typeof import('vue/macros')['$computed']
  const $customRef: typeof import('vue/macros')['$customRef']
  const $ref: typeof import('vue/macros')['$ref']
  const $shallowRef: typeof import('vue/macros')['$shallowRef']
  const $toRef: typeof import('vue/macros')['$toRef']
  const EffectScope: typeof import('vue')['EffectScope']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const currentLocale: typeof import('./src/composables/i18n')['currentLocale']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const effectScope: typeof import('vue')['effectScope']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const i18n: typeof import('./src/composables/i18n')['i18n']
  const imageNameFromPath: typeof import('./src/utils/image')['imageNameFromPath']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const isTallScreen: typeof import('./src/composables/screen')['isTallScreen']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const screenHeight: typeof import('./src/composables/screen')['screenHeight']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useEventBus: typeof import('@vueuse/core')['useEventBus']
  const useI18n: typeof import('vue-i18n')['useI18n']
  const useLocalStorage: typeof import('@vueuse/core')['useLocalStorage']
  const usePreferredLanguages: typeof import('@vueuse/core')['usePreferredLanguages']
  const useSlots: typeof import('vue')['useSlots']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for vue template auto import
declare module 'vue' {
  interface ComponentCustomProperties {
    $$: typeof import('vue/macros')['$$']
    $: typeof import('vue/macros')['$']
    $computed: typeof import('vue/macros')['$computed']
    $customRef: typeof import('vue/macros')['$customRef']
    $ref: typeof import('vue/macros')['$ref']
    $shallowRef: typeof import('vue/macros')['$shallowRef']
    $toRef: typeof import('vue/macros')['$toRef']
    EffectScope: typeof import('vue')['EffectScope']
    computed: typeof import('vue')['computed']
    createApp: typeof import('vue')['createApp']
    currentLocale: typeof import('./src/composables/i18n')['currentLocale']
    customRef: typeof import('vue')['customRef']
    defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
    defineComponent: typeof import('vue')['defineComponent']
    effectScope: typeof import('vue')['effectScope']
    getCurrentInstance: typeof import('vue')['getCurrentInstance']
    getCurrentScope: typeof import('vue')['getCurrentScope']
    h: typeof import('vue')['h']
    i18n: typeof import('./src/composables/i18n')['i18n']
    imageNameFromPath: typeof import('./src/utils/image')['imageNameFromPath']
    inject: typeof import('vue')['inject']
    isProxy: typeof import('vue')['isProxy']
    isReactive: typeof import('vue')['isReactive']
    isReadonly: typeof import('vue')['isReadonly']
    isRef: typeof import('vue')['isRef']
    isTallScreen: typeof import('./src/composables/screen')['isTallScreen']
    markRaw: typeof import('vue')['markRaw']
    nextTick: typeof import('vue')['nextTick']
    onActivated: typeof import('vue')['onActivated']
    onBeforeMount: typeof import('vue')['onBeforeMount']
    onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
    onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
    onDeactivated: typeof import('vue')['onDeactivated']
    onErrorCaptured: typeof import('vue')['onErrorCaptured']
    onMounted: typeof import('vue')['onMounted']
    onRenderTracked: typeof import('vue')['onRenderTracked']
    onRenderTriggered: typeof import('vue')['onRenderTriggered']
    onScopeDispose: typeof import('vue')['onScopeDispose']
    onServerPrefetch: typeof import('vue')['onServerPrefetch']
    onUnmounted: typeof import('vue')['onUnmounted']
    onUpdated: typeof import('vue')['onUpdated']
    provide: typeof import('vue')['provide']
    reactive: typeof import('vue')['reactive']
    readonly: typeof import('vue')['readonly']
    ref: typeof import('vue')['ref']
    resolveComponent: typeof import('vue')['resolveComponent']
    screenHeight: typeof import('./src/composables/screen')['screenHeight']
    shallowReactive: typeof import('vue')['shallowReactive']
    shallowReadonly: typeof import('vue')['shallowReadonly']
    shallowRef: typeof import('vue')['shallowRef']
    toRaw: typeof import('vue')['toRaw']
    toRef: typeof import('vue')['toRef']
    toRefs: typeof import('vue')['toRefs']
    triggerRef: typeof import('vue')['triggerRef']
    unref: typeof import('vue')['unref']
    useAttrs: typeof import('vue')['useAttrs']
    useCssModule: typeof import('vue')['useCssModule']
    useCssVars: typeof import('vue')['useCssVars']
    useEventBus: typeof import('@vueuse/core')['useEventBus']
    useI18n: typeof import('vue-i18n')['useI18n']
    useLocalStorage: typeof import('@vueuse/core')['useLocalStorage']
    usePreferredLanguages: typeof import('@vueuse/core')['usePreferredLanguages']
    useSlots: typeof import('vue')['useSlots']
    watch: typeof import('vue')['watch']
    watchEffect: typeof import('vue')['watchEffect']
    watchPostEffect: typeof import('vue')['watchPostEffect']
    watchSyncEffect: typeof import('vue')['watchSyncEffect']
  }
}
