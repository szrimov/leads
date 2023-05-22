<template lang="pug">
  #app.flex.column.j-between
    .loader(v-if="isLoading")
      vLoader
    vHeader
    main.grow
      nuxt
    vFooter#footer
</template>

<script>
import { mapState } from 'vuex'
import vHeader from '@components/header'
import vFooter from '@components/footer'
import vLoader from '@components/loader'

export default {
  components: {
    vHeader,
    vFooter,
    vLoader
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  },
  watch: {
    $route() {
      this.closeAllModals()
    }
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  .loader {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1001;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-neutral-white;
  }
}
</style>
