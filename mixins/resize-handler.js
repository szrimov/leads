export default {
  data() {
    return {
      isMobile: null,
      isSmallDesktop: null,
      isMedium: null,
      isTablet: null,
      isHovers: null,
      isMain: null
    }
  },
  methods: {
    onResizeHandler() {
      this.isSmallDesktop = window.matchMedia('(max-width: 1300px)').matches
      this.isHovers = window.matchMedia('(min-width: 1025px)').matches
      this.isMedium = window.matchMedia('(max-width: 960px)').matches
      this.isTablet = window.matchMedia('(max-width: 768px)').matches
      this.isMobile = window.matchMedia('(max-width: 575px)').matches
      this.isMain = window.matchMedia('(max-width: 1160px)').matches
    }
  },
  mounted() {
    this.onResizeHandler()
    window.addEventListener('resize', this.onResizeHandler)
  },
  destroyed() {
    window.removeEventListener('resize', this.onResizeHandler)
  }
}
