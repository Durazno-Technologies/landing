// Lazy load AOS to improve initial page load
export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    // Defer AOS loading until after critical content renders
    const loadAOS = async () => {
      const [AOS] = await Promise.all([
        import('aos').then(m => m.default),
        import('aos/dist/aos.css')
      ])
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        disable: window.innerWidth < 768 // Disable on mobile for better perf
      })
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => loadAOS())
    } else {
      setTimeout(loadAOS, 100)
    }
  }
})
